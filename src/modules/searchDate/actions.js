import {DEPARTURE_DATE, CHOOSE_DEPARTURE_TIME} from './action-types';

export const chooseDepartureDate = (date) => {
    return {
        type: DEPARTURE_DATE,
        payload: date
    }
};

export const chooseDepartureTime = (time) => {
    return {
        type: CHOOSE_DEPARTURE_TIME,
        payload: time
    }
};