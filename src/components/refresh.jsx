import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { RefreshAction } from "../store/actions/refresh.action"

const ButtonRefresh = () => {
    const dispatch = useDispatch()
    
    const refresh = () => {
        dispatch(RefreshAction())
    }
    return (

        <button onClick={() => refresh()}>Refresh</button>
    )
}

export default ButtonRefresh;