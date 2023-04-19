import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchTodayWeatherAction } from "./meteo.action";


export const refreshCity = createAsyncThunk(
    'refresh/city',
    async(nameCity, {getState, dispatch }) => {
        
        const lang = getState().language.language
        const data = {nameCity, lang}
        dispatch(FetchTodayWeatherAction(data))
    }
)