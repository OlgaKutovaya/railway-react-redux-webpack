import {GET_RAILWAY_PATHS_LIST} from './action-types';

const initialState = {
    railwayPathList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_RAILWAY_PATHS_LIST:
            return {
                ...state,
                railwayPathList: action.payload.data.list
            };
        default:
            return state;
    }
}