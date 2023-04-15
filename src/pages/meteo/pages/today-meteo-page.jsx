import TodayMeteo from "../../../containers/today-meteo"
import './meteo-page.css'
const TodayMeteoPage = () => {

    return (
        <div className="main">
            <h2>Meteo for today </h2>
            <TodayMeteo />
        </div>
    )
}

export default TodayMeteoPage