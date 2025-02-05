import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import LoadingSkeleton from "./LoadingSkeleton";

const ForecastDisplay = () => {
    const { forecastData, unit, forecastLoading } = useContext(WeatherContext);

    if (!forecastData) return null;

    const dailyForecast = forecastData.list.reduce((acc, item) => {
        const date = item.dt_txt.split(" ")[0];
        if (!acc[date]) {
            acc[date] = item;
        }
        return acc;
    }, {});

    return (
        <div >
            <h3>5-Day Forecast</h3>
            <div className="forecast-container">
                {forecastLoading ? <div className="skeleton-container">
                    <LoadingSkeleton  />
                    <LoadingSkeleton width="80%"/>
                    <LoadingSkeleton />
                    <LoadingSkeleton width='70%'/>
                </div> : Object.values(dailyForecast).slice(0, 5).map((day) => (
                    <div key={day.dt} className="forecast-item">
                        <p className="main-text">Date: <span className="ans-text">{day.dt_txt.split(" ")[0]}</span></p>
                        <p className="main-text">
                            Temperature: <span className="ans-text">{day.main.temp}°{unit === "metric" ? "C" : "F"}</span>
                        </p>
                        <p className="main-text">Condition: <span className="ans-text"> {day.weather[0].description}</span></p>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img
                                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                                alt="Weather Icon"
                            />
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default ForecastDisplay;