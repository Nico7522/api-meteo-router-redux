import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchForecastWeatherAction, FetchTodayWeatherAction } from "./meteo.action";


export const refreshCity = createAsyncThunk(
    'refresh/city',
    async(nameCity, {getState, dispatch }) => {
        
        const lang = getState().language.language
        const data = {nameCity, lang}
        dispatch(FetchTodayWeatherAction(data))
        dispatch(FetchForecastWeatherAction(data))
    }
)