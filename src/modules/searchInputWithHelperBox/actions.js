import {
    FIND_SEARCHED_CITIES_FROM, FIND_SEARCHED_CITIES_TO, CLOSE_SEARCHED_CITIES_BOX,
    SET_DESTINATION_FROM, SET_DESTINATION_TO
} from './action-types';

export const findSearchedCities = (input, inputType) => {
    return async (dispatch) => {
        const response = await fetch('/train_search/station/?term=' + input);
        const data = await response.json();
        if (inputType === 'FROM') {
            dispatch({
                type: FIND_SEARCHED_CITIES_FROM,
                payload: data
            })
        } else if (inputType === 'TO') {
            dispatch({
                type: FIND_SEARCHED_CITIES_TO,
                payload: data
            })
        }
    };
};

export const closeSearchedCitiesBox = () => {
    return {
        type: CLOSE_SEARCHED_CITIES_BOX,
        payload: null
    }
};

export const setDestinationFrom = (item) => {
    return {
        type: SET_DESTINATION_FROM,
        payload: item
    }
};

export const setDestinationTo = (item) => {
    return {
        type: SET_DESTINATION_TO,
        payload: item
    }
};

export const setLinkClickDestination = (input, inputType) => {
    return (dispatch) => {
        return new Promise(async (resolve, reject) => {
            const response = await fetch('/train_search/station/?term=' + input);
            const data = await response.json();
            const desiredDestination = data[0];
            if (inputType === 'FROM') {
                dispatch({
                    type: SET_DESTINATION_FROM,
                    payload: desiredDestination
                })
            } else if (inputType === 'TO') {
                dispatch({
                    type: SET_DESTINATION_TO,
                    payload: desiredDestination
                })
            }
            resolve();
        })
    };
};