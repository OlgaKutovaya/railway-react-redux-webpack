import {
    FIND_SEARCHED_CITIES_FROM, FIND_SEARCHED_CITIES_TO, CLOSE_SEARCHED_CITIES_BOX,
    SET_DESTINATION_FROM, SET_DESTINATION_TO, DEPARTURE_DATE, GET_RAILWAY_PATHS_LIST,
    CHOOSE_DEPARTURE_TIME
} from '../types/action-types';
import queryString from 'query-string';

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

export const setLinkClickDestination = (input, inputType) => {
    return async (dispatch, getState) => {
        const response = await fetch('/train_search/station/?term=' + input);
        const data = await response.json();
        const desiredDestination = data[0];
        console.log(desiredDestination);
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
        const {destinationFrom, destinationTo, departureDate, departureTime} = currStateData.railwayData;
        const paramsObj = {
            from: destinationFrom.value,
            to: destinationTo.value,
            date: departureDate,
            time: departureTime || '00:00'
        };
        const paramsStr = queryString.stringify(paramsObj);

        console.log(paramsStr);

        const response = await fetch('/train_search/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: paramsStr
        });
        const data = await response.json();
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