import { Outlet } from "react-router-dom";
import { fetchMeteoForecast, fetchMeteoToday } from "../../api/fetchMeteo";
import { useDispatch } from "react-redux";
import { TodayFetchMeteoAction } from "../../store/actions/meteo.action";
import { NavLink } from "react-router-dom";
import SearchBar from "../../components/search-bar";

export default function MeteoPage() {

  return (
    <>
      <h1>Météo</h1>
      <SearchBar />
      <button><NavLink to='today'>Actual meteo</NavLink></button>
      <button ><NavLink to='forecast'>Meteo for next hours</NavLink></button>
      <Outlet />
    </>
  );
}



//   let data = {};
//   const fetchMeteo = () => {
//     fetchMeteoToday('mons').then(r => {
//         dispatch(TodayFetchMeteoAction(r))
//     })
 
//   };