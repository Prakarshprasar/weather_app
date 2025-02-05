import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const WeatherDisplay = () => {
  const { weatherData, unit } = useContext(WeatherContext);

  if (!weatherData) return null;

  return (
    <div className="weather-container">
      <h2> {weatherData.name}</h2>
      <p className="main-text">
        Temperature: <span className="ans-text">{weatherData.main.temp}°{unit === "metric" ? "C" : "F"}</span>
      </p>
      <p className="main-text">Humidity: <span className="ans-text">{weatherData.main.humidity}%</span></p>
      <p className="main-text">Wind Speed: <span className="ans-text">{weatherData.wind.speed} m/s</span> </p>
      <p className="main-text">Condition: <span className="ans-text">{weatherData.weather[0].description}</span></p>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
        alt="Weather Icon"
      />
    </div>
  );
};

export default WeatherDisplay;