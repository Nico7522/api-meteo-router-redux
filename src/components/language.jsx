import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RefreshLangAction, setLangAction } from "../store/actions/setLang.action";
import './components.css'
import { FetchTodayWeatherAction } from "../store/actions/meteo.action";
const Language = () => {
  const dispatch = useDispatch();
  const handleLang = (e) => {
    e.preventDefault();
    dispatch(RefreshLangAction(e.target.value))
  };

  return (
    <div className="lang">
    <form>
      <label htmlFor="">Language ?</label>
      <select className="form-select form-select-sm mb-3"  onChange={(e) => handleLang(e) }>
        <option value="fr">FR</option>
        <option value="en">ENG</option>
      </select>
      
    </form>

    </div>
  );
};

export default Language;
