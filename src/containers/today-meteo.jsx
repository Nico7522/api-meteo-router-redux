import { useSelector } from "react-redux";
import { useFetchTodayMeteo } from "../hooks/meteo-today.hooks";
import "./meteo.css";
const TodayMeteo = () => {
  let search = useSelector((state) => state.search.search);
  const [isLoading, error] = useFetchTodayMeteo(search);
  let data = useSelector((state) => state.meteo.TodayMeteo[0]);

  return (
    <>
      {data && (
        <div className="card">
          <div className="container">
            <img
              className="img"
              src={"https://openweathermap.org/img/wn/" + data.img + ".png"}
              alt=""
            />
          </div>

          <div className="card-header">
            <span>
              City : {data.name}
              <br />
            </span>
            {/* <span>March 13</span> */}
          </div>

          <span className="temp">
            Temperature {data.temp}°C <br /> Feeling {data.feeling}°C <br />{" "}
            {data.description}
          </span>
        </div>
      )}
    </>
  );
};

export default TodayMeteo;

//     <div>

//       <h2>Here you can see the meteo for today ! </h2>
//       <h3>City : {data.name}</h3>
//       <p>temperature : {data.temp}°C</p>
//       <p>Feeling : {data.feeling}°C</p>
//       <p>Look like : {data.description}</p>
//       <img className="img"
//     src={
//       "https://openweathermap.org/img/wn/" + data.img + ".png"
//     }
//     alt=""
//   />
//     </div>
