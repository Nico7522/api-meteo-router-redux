import { useSelector } from "react-redux";
import { useFetchForecastMeteo } from "../hooks/meteo-forecast.hook";

const ForecastMeteo = () => {
    
    let search = useSelector(state => state.search.search)
    let data = useSelector(state => state.meteo.ForecastMeteo[0])
    const [isLoading, error ] = useFetchForecastMeteo(search)
    return (
        <div>
            <h2>Here you can see the meteo for the next hours !</h2>
            {data && <>
                <h3>City : {data.name}</h3>
                <div className="one" >
                <div >div1</div>
                <div >div1</div>
                <div >div1</div>
                <div >div1</div>
                <div >div1</div>
                </div>
            </>}
        </div>
    )
}

export default ForecastMeteo;