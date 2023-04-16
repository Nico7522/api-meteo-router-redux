import { useSelector } from "react-redux";
import { useFetchForecastMeteo } from "../hooks/meteo-forecast.hook";
import './meteo.css'
import { useFetchTodayMeteo } from "../hooks/meteo-today.hooks";
const ForecastMeteo = () => {
    let search = useSelector((state) => state.search.search);
  const [isLoading, error] = useFetchForecastMeteo(search);
  const [isLoading2, error2] = useFetchTodayMeteo(search);
  let data = useSelector((state) => state.meteo.ForecastMeteo[0]);
  let dataNow = useSelector((state) => state.meteo.TodayMeteo[0]);

  return (
    <div >
      {(data && dataNow) && (
        <div className="main-forecast">
          <h3>City : {data.name}</h3>
            <h3 className="temp-now">Actual Temparature : {dataNow.temp}°C</h3>
            <img className="img-temp"
        src={ 
        "https://openweathermap.org/img/wn/" + dataNow.img + ".png"
       }
        alt=""
       />
          <div className="one">

            <div>
                <p className="para-one">{new Date(data.forecast[0].date).toLocaleTimeString()}</p>
              <img
                className="img-forecast"
                src={"https://openweathermap.org/img/wn/" + data.forecast[0].img + ".png"}
                alt=""
              />
            </div>
            <div> 
            <p className="para-one">{new Date(data.forecast[1].date).toLocaleTimeString()}</p>
                <img
                className="img-forecast"
                src={"https://openweathermap.org/img/wn/" + data.forecast[1].img + ".png"}
                alt=""
              /></div>
            <div>
            <p className="para-one">{new Date(data.forecast[2].date).toLocaleTimeString()}</p>
                 <img
                className="img-forecast"
                src={"https://openweathermap.org/img/wn/" + data.forecast[2].img + ".png"}
                alt=""
              /></div>
            <div>
            <p className="para-one">{new Date(data.forecast[3].date).toLocaleTimeString()}</p>
                 <img
                className="img-forecast"
                src={"https://openweathermap.org/img/wn/" + data.forecast[3].img + ".png"}
                alt=""
              /></div>
            <div>
            <p className="para-one">{new Date(data.forecast[4].date).toLocaleTimeString()}</p>
                 <img
                className="img-forecast"
                src={"https://openweathermap.org/img/wn/" + data.forecast[4].img + ".png"}
                alt=""
              /></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForecastMeteo;
