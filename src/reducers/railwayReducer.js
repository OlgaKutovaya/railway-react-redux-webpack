import {CLOSE_SEARCHED_CITIES_BOX, FIND_SEARCHED_CITIES_FROM,
    FIND_SEARCHED_CITIES_TO, SET_DESTINATION_FROM, SET_DESTINATION_TO,
    DEPARTURE_DATE, GET_RAILWAY_PATHS_LIST, CHOOSE_DEPARTURE_TIME} from '../reducers/types'

const initialState = {
    foundedCitiesListFrom: [],
    foundedCitiesListTo: [],
    destinationFrom: {},
    destinationTo: {},
    departureDate: '',
    departureTime: '',
    railwayPathList: []
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

        case GET_RAILWAY_PATHS_LIST:
            return {
                ...state,
                railwayPathList: action.payload.data.list
            };
        default:
            return state;
    }
}