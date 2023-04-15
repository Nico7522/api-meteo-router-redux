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
            <label htmlFor="search">Enter a city</label>
            <input value={city} onChange={(e) => setCity(e.target.value)} type="text" id="search" />
            <button className="btn btn-primary">Search</button>
        </form>
    )
}