import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLangAction } from "../store/actions/setLang.action";
import './components.css'
const Language = () => {
  const dispatch = useDispatch();

    const handleLang = (e) => {
    e.preventDefault();
    dispatch(setLangAction(e.target.value));
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
