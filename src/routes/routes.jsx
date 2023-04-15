import App from '../App';
import MeteoPage from "../pages/meteo/meteo-page";
import ForecastMeteoPage from '../pages/meteo/pages/forecast-meteo-page';
import TodayMeteoPage from '../pages/meteo/pages/today-meteo-page';

export const routes = [
    {
        path: '',
        element: <App />,
        children: [
            {
                index: true,
                element: <MeteoPage />
            },
            {
                path: 'meteo',
                element: <MeteoPage />,
                children: [
                    {
                        index: true,
                        element: <TodayMeteoPage />,
                    },
                    {
                        path: 'today',
                        element: <TodayMeteoPage />,
                    },
                    {
                        path: 'forecast',
                        element: <ForecastMeteoPage />,
                    }
                ]
            }
        ]
    }
]