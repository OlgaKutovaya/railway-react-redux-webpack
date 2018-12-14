import queryString from "query-string";
import {GET_RAILWAY_PATHS_LIST} from "./action-types";

export const getRailwayPathsList = () => {
    return async (dispatch, getState) => {
        const currStateData = getState();
        const {destinationFrom, destinationTo} = currStateData.railwayData;
        const {departureDate, departureTime} = currStateData.departureTimeData;
        const paramsObj = {
            from: destinationFrom.value,
            to: destinationTo.value,
            date: departureDate,
            time: departureTime || '00:00'
        };
        const paramsStr = queryString.stringify(paramsObj);

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