import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import { FetchTodayWeatherAction } from "./meteo.action";

export const setLangAction = createAction('set/language');

export const RefreshLangAction = createAsyncThunk(
    'refresh/lang',
    async(lang, thunkAPI) => {
        const nameCity = thunkAPI.getState().weather.todayMeteoData.name;
        const data = {nameCity, lang}
        thunkAPI.dispatch(setLangAction(lang))
        thunkAPI.dispatch(FetchTodayWeatherAction(data))
    },
    {
        condition: (lang, thunkAPI) => {
            const actualLang = thunkAPI.getState().language.language;
            return actualLang !== lang
        },
        dispatchConditionRejection: true
    }
)