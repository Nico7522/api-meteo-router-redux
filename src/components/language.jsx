import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLangAction } from "../store/actions/setLang.action";
import './components.css'
import { FetchTodayWeatherAction } from "../store/actions/meteo.action";
const Language = () => {
  // const [lang, setLang] = useState('fr')
  const dispatch = useDispatch();
  let city;
  let nameCity;
  let lang;
  city = useSelector(state => state.weather.todayMeteoData)
  const handleLang = (e) => {
    e.preventDefault();
    // setLang(e.target.value)
    nameCity = city.name
    lang = e.target.value
    dispatch(setLangAction(e.target.value));
    console.log(e.target.value);
    const data = {nameCity, lang}
    dispatch(FetchTodayWeatherAction(data))
   
    
  };

  // if (nameCity === null) {
  //   return (
  //    <p>Loading</p>
  //   )
     
  //  }
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
