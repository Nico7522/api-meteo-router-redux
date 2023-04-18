import { createReducer } from "@reduxjs/toolkit";
import { FetchForecastWeatherAction, FetchTodayWeatherAction } from "../actions/meteo.action";

const initialState = {
    todayMeteoData : null,
    forecastMeteoData : null,
    loading: false,
    error: false
}

export const weatherReducer = createReducer(initialState, (builder) => {
    builder.
    addCase(FetchTodayWeatherAction.pending, (state) => {
        state.loading = true,
        state.error = null,
        state.todayMeteoData = null
    })
    .addCase(FetchTodayWeatherAction.fulfilled, (state, action) => {
        state.loading = false,
        state.error = false,
        state.todayMeteoData = action.payload
    })
    .addCase(FetchTodayWeatherAction.rejected, (state, action) => {
        state.error = action.payload
    })
    .addCase(FetchForecastWeatherAction.pending, (state) => {
        state.loading = true,
        state.error = null,
        state.forecastMeteoData = null
    })
    .addCase(FetchForecastWeatherAction.fulfilled, (state, action) => {
        state.loading = false,
        state.error = false,
        state.forecastMeteoData = action.payload
    })
    .addCase(FetchForecastWeatherAction.rejected, (state, action) => {
        state.error = action.payload
    })
})


