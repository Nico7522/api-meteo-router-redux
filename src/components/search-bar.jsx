import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../store/actions/search.action";
import { useState } from "react";
import './components.css'
import { FetchForecastWeatherAction, FetchTodayWeatherAction } from "../store/actions/meteo.action";
import { refreshCity } from "../store/actions/refreshCity.action";
export default function SearchBar() {
  const dispatch = useDispatch();
  const [nameCity, setCity] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(refreshCity(nameCity))
    setCity("");
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="form-floating mb-2 perso">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="City"
          value={nameCity}
          onChange={(e) => setCity(e.target.value)}
        />
        <label htmlFor="floatingInput" >
          City
        </label>
      </div>
      <button className="btn btn-primary">Search</button>
    </form>
  );
}
