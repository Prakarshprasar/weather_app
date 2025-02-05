import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric"); 
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_API_TOKEN; 
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather`;
  const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast`;

  const fetchWeather = async (cityName) => {
    try {
      const response = await axios.get(WEATHER_URL, {
        params: {
          q: cityName,
          appid: API_KEY,
          units: unit,
        },
      });
      setError("");
      // localStorage.setItem("lastSearchedCity", cityName);
      return response.data;
    } catch (err) {
      setError("City not found. Please try again.");
      throw err;
    }
  };

  const fetchForecast = async (cityName) => {
    console.log(cityName, 'cityNameeeeeforecast');
    try {
      const response = await axios.get(FORECAST_URL, {
        params: {
          q: cityName,
          appid: API_KEY,
          units: unit,
        },
      });
      return response.data;
    } catch (err) {
      setError("Error fetching forecast data.");
      throw err;
    }
  };

  const {
    data: weatherData,
    isLoading: weatherLoading,
    refetch: refetchWeather,
  } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    enabled: !!city, 
  });

  const {
    data: forecastData,
    isLoading: forecastLoading,
    refetch: refetchForecast,
  } = useQuery({
    queryKey: ["forecast", city],
    queryFn: () => fetchForecast(city),
    enabled: !!city, 
  });

  useEffect(() => {
    if (city) {
      refetchWeather();
      refetchForecast();
    }
  }, [unit]);

  useEffect(() => {
    if (city) {
      const interval = setInterval(() => {
        refetchWeather();
        refetchForecast();
      }, 30000);
      return () => clearInterval(interval);
    }
  }, [city, refetchWeather, refetchForecast]);

  // useEffect(() => {
  //   const lastCity = localStorage.getItem("lastSearchedCity");
  //   if (lastCity) {
  //     setCity(lastCity);
  //   }
  // }, []);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        unit,
        setUnit,
        weatherData,
        forecastData,
        error,
        weatherLoading,
        forecastLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;