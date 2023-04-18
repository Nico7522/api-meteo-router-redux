import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchMeteoForecast, fetchMeteoToday } from "../../api/fetchMeteo";
import { useSelector } from "react-redux";
let lang;
export const TodayFetchMeteoAction = createAction('meteo/TodayFetch', (data) => {
    return {
        payload: {
            ...data
        }
    }
});

export const ForecastFetchMeteoAction = createAction('meteo/ForecastFetch', (data) => {
    return {
        payload : {
            ...data
            
        }
    }
});

export const FetchTodayWeatherAction = createAsyncThunk(
    'weather/fetch-today',

    async (data) => {
    
        console.log(data.nameCity);
        return await fetchMeteoToday(data.nameCity, data.lang)
    }
)

export const FetchForecastWeatherAction = createAsyncThunk(
    'weather/fetch-forecast',
    async (data) => {
        return await fetchMeteoForecast(data)
    }
)

