import { Outlet } from "react-router-dom";
import { fetchMeteoForecast, fetchMeteoToday } from "../../api/fetchMeteo";
import { useDispatch } from "react-redux";
import { TodayFetchMeteoAction } from "../../store/actions/meteo.action";
import { NavLink } from "react-router-dom";
import SearchBar from "../../components/search-bar";
import './pages/meteo-page.css'
import Language from "../../components/language";
export default function MeteoPage() {

  return (
    <>
      <h1>Météo</h1>
      <SearchBar />
      <button className="btn btn-primary"><NavLink to='/meteo/today'>Actual meteo</NavLink></button>
      <button className="btn btn-primary"><NavLink to='/meteo/forecast'>Meteo for next hours</NavLink></button>
      <Language />
      <Outlet />
    </>
  );
}



