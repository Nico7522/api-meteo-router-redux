import { useDispatch } from "react-redux"
import { searchAction } from "../store/actions/search.action"
import { useState } from "react"

export default function SearchBar () {
    const dispatch = useDispatch()
    const [city, setCity] = useState('')
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchAction(city))
        setCity('')

    }

    return (
        
        <form onSubmit={handleSearch} >
            <div className="form-floating  mb-2 perso">
            <input className="form-control" value={city} onChange={(e) => setCity(e.target.value)} type="text" id="search" />
            <label className="city" htmlFor="search" placeholder="">Enter a city</label>

            </div>
            <button className="btn btn-primary">Search</button>
        </form>


    )
}