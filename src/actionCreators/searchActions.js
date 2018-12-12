import {FIND_SEARCHED_CITIES_FROM, FIND_SEARCHED_CITIES_TO,
    CLOSE_SEARCHED_CITIES_BOX, SET_DESTINATION_FROM,
    SET_DESTINATION_TO, DEPARTURE_DATE, GET_RAILWAY_PATHS_LIST, CHOOSE_DEPARTURE_TIME} from '../reducers/types';

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

export const chooseDepartureDate = (date) => {
    return {
        type: DEPARTURE_DATE,
        payload: date
    }
};

export const getRailwayPathsList = () => {
    return async (dispatch, getState) => {
        const currStateData = getState();

        const paramsStr = 'from=' + currStateData.railwayData.destinationFrom.value +
            '&to=' + currStateData.railwayData.destinationTo.value +
            '&date=' + currStateData.railwayData.departureDate +
            '&time=' + currStateData.railwayData.departureTime;

        console.log(paramsStr);

        const response = await fetch('/train_search/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: paramsStr
        });

        const data = await response.json();

        console.log(data);
            dispatch({
                type: GET_RAILWAY_PATHS_LIST,
                payload: data
            })
    };
};

export const chooseDepartureTime = (time) => {
    return {
        type: CHOOSE_DEPARTURE_TIME,
        payload: time
    }
};