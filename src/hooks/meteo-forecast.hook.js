import { useEffect } from "react";
import { useState } from "react"
import { fetchMeteoForecast, fetchMeteoToday } from "../api/fetchMeteo";
import { useDispatch } from "react-redux";
import { ForecastFetchMeteoAction, TodayFetchMeteoAction } from "../store/actions/meteo.action";


export const useFetchForecastMeteo = (city) => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchMeteoForecast(city)
        .then((data) => {
            dispatch(ForecastFetchMeteoAction(data))
        })
        .catch((error) => {
            setError(error)
        })
        .finally(() => setIsLoading(false))

        return () => {
            setIsLoading(true)
            setError(false)
        }
    }, [city])
    return [isLoading, error ]
};