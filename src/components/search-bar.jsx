import { useDispatch } from "react-redux";
import { searchAction } from "../store/actions/search.action";
import { useState } from "react";
import './components.css'
export default function SearchBar() {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchAction(city));
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
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label for="floatingInput" >
          City
        </label>
      </div>
      <button className="btn btn-primary">Search</button>
    </form>
  );
}
