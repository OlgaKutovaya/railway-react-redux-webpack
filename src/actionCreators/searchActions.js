import {FIND_SEARCHED_CITIES_FROM, FIND_SEARCHED_CITIES_TO,
    CLOSE_SEARCHED_CITIES_BOX, SET_DESTINATION_FROM, SET_DESTINATION_TO} from '../reducers/types';

export const findSearchedCities = (input, inputType) => {
    return async (dispatch, getState) => {
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

export const closeSearchedCitiesBox = () => {
    return {
        type: CLOSE_SEARCHED_CITIES_BOX,
        payload: null
    }
};