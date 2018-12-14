import {DEPARTURE_DATE, CHOOSE_DEPARTURE_TIME} from './action-types';

const initialState = {
    departureDate: '',
    departureTime: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DEPARTURE_DATE:
            return {
                ...state,
                departureDate: action.payload
            };
        case CHOOSE_DEPARTURE_TIME:
            return {
                ...state,
                departureTime: action.payload
            };
        default:
            return state;
    }
}