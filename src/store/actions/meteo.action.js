import { createAction } from "@reduxjs/toolkit"


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

