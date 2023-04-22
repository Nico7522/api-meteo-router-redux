import { useSelector } from "react-redux";
import { useFetchForecastMeteo } from "../hooks/meteo-forecast.hook";
import './meteo.css'
import { useFetchTodayMeteo } from "../hooks/meteo-today.hooks";
const ForecastMeteo = () => {
  //   let search = useSelector((state) => state.search.search);
  // const [isLoading, error] = useFetchForecastMeteo(search);
  // const [isLoading2, error2] = useFetchTodayMeteo(search);
  // let data = useSelector((state) => state.meteo.ForecastMeteo[0]);
  // let dataNow = useSelector((state) => state.meteo.TodayMeteo[0]);

  const {loadind, todayMeteoData, forecastMeteoData, errors} = useSelector(state => state.weather)


  return (
    <div >
      {(forecastMeteoData && todayMeteoData) && (
        <div className="main-forecast">
          <h3>City : {todayMeteoData.name}</h3>
            <h3 className="temp-now">Actual Temparature : {forecastMeteoData.temp}°C</h3>
            <img className="img-temp"
        src={ 
        "https://openweathermap.org/img/wn/" +todayMeteoData.img + ".png"
       }
        alt=""
       />
          <div className="one">

            <div>
                <p className="para-one">{new Date(forecastMeteoData.forecast[0].date).toLocaleTimeString()}</p>
              <img
                className="img-forecast"
                src={"https://openweathermap.org/img/wn/" + forecastMeteoData.forecast[0].img + ".png"}
                alt=""
              />
            </div>
            <div> 
            <p className="para-one">{new Date(forecastMeteoData.forecast[1].date).toLocaleTimeString()}</p>
                <img
                className="img-forecast"
                src={"https://openweathermap.org/img/wn/" + forecastMeteoData.forecast[1].img + ".png"}
                alt=""
              /></div>
            <div>
            <p className="para-one">{new Date(forecastMeteoData.forecast[2].date).toLocaleTimeString()}</p>
                 <img
                className="img-forecast"
                src={"https://openweathermap.org/img/wn/" + forecastMeteoData.forecast[2].img + ".png"}
                alt=""
              /></div>
            <div>
            <p className="para-one">{new Date(forecastMeteoData.forecast[3].date).toLocaleTimeString()}</p>
                 <img
                className="img-forecast"
                src={"https://openweathermap.org/img/wn/" + forecastMeteoData.forecast[3].img + ".png"}
                alt=""
              /></div>
            <div>
            <p className="para-one">{new Date(forecastMeteoData.forecast[4].date).toLocaleTimeString()}</p>
                 <img
                className="img-forecast"
                src={"https://openweathermap.org/img/wn/" + forecastMeteoData.forecast[4].img + ".png"}
                alt=""
              /></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForecastMeteo;
