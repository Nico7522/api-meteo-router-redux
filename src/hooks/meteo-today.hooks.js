import { useEffect } from "react";
import { useState } from "react"
import { fetchMeteoForecast, fetchMeteoToday} from "../api/fetchMeteo";
import { useDispatch, useSelector } from "react-redux";
import { ForecastFetchMeteoAction, TodayFetchMeteoAction } from "../store/actions/meteo.action";

export const useFetchTodayMeteo = (city) => {
    const lang = useSelector(state => state.language.language)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        fetchMeteoToday(city, lang)
        .then((data) => {
            dispatch(TodayFetchMeteoAction(data))
            setWeather(data)
        })
        .catch((error) => {
            setError(error)
        })
        .finally(() => setIsLoading(false))

        return () => {
            setIsLoading(true)
            setError(false)
        }

    }, [city, lang])
    
    return [isLoading , error, weather]
};