import {combineReducers} from "redux";
import searchInputBoxReducer from './modules/searchInputWithHelperBox/reducer';
import departureTimeReducer from './modules/searchDate/reducer';
import railwayPathListReducer from './modules/buttonSubmitSearchTrains/reducer';

export default combineReducers({
    railwayData: searchInputBoxReducer,
    departureTimeData: departureTimeReducer,
    railwayPathListData: railwayPathListReducer
});
