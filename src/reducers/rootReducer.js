import { combineReducers } from "redux";
import railwayReducer from './railwayReducer'

export default combineReducers({
    railwayData: railwayReducer
});