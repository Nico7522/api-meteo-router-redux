import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { FetchForecastWeatherAction, FetchTodayWeatherAction } from "./meteo.action";

export const RefreshAction = createAsyncThunk(
    'refresh/weater',
    async(arg, thunkAPI) => {
        const data = thunkAPI.getState()
        const nameCity = data.weather.todayMeteoData.name
        const lang = data.language.language
        const dataS = {nameCity, lang}
        
        
        thunkAPI.dispatch(FetchTodayWeatherAction(dataS))
        thunkAPI.dispatch(FetchForecastWeatherAction(dataS))
        
    },)