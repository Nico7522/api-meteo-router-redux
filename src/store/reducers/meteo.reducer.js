import { createReducer } from "@reduxjs/toolkit";
import { ForecastFetchMeteoAction, TodayFetchMeteoAction } from "../actions/meteo.action";


const initialState = {
    TodayMeteo : [],
    ForecastMeteo : []
};

const meteoReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(TodayFetchMeteoAction, (state, action) => {
        state.TodayMeteo[0] = action.payload
    })
    .addCase(ForecastFetchMeteoAction, (state, action) => {
        state.ForecastMeteo[0] = action.payload
    })
});

export default meteoReducer