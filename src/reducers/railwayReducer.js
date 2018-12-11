import {CLOSE_SEARCHED_CITIES_BOX, FIND_SEARCHED_CITIES_FROM,
    FIND_SEARCHED_CITIES_TO, SET_DESTINATION_FROM, SET_DESTINATION_TO} from '../reducers/types'

const initialState = {
    foundedCitiesListFrom: [],
    foundedCitiesListTo: [],
    destinationFrom: {},
    destinationTo: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FIND_SEARCHED_CITIES_FROM:
            return {
                ...state,
                foundedCitiesListFrom: action.payload
            };
        case FIND_SEARCHED_CITIES_TO:
            return {
                ...state,
                foundedCitiesListTo: action.payload
            };
        case SET_DESTINATION_FROM:
            return {
                ...state,
                destinationFrom: action.payload
            };
        case SET_DESTINATION_TO:
            return {
                ...state,
                destinationTo: action.payload
            };

        case CLOSE_SEARCHED_CITIES_BOX:
            return {
                ...state,
                foundedCitiesListFrom: [],
                foundedCitiesListTo: []
            };

        default:
            return state;
    }
}

