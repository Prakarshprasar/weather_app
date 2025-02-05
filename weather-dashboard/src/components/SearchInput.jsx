import { useState, useContext, useEffect } from "react";
import WeatherContext from "../context/WeatherContext";
import { use } from "react";

const SearchInput = () => {
  const { setCity, unit, setUnit, weatherLoading, forecastLoading } = useContext(WeatherContext);
  const [inputCity, setInputCity] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputCity);

  };

  const toggleUnit = () => {
    setUnit(unit === "metric" ? "imperial" : "metric");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
      />
      <button type="submit" className={`${weatherLoading||forecastLoading?'loadingState':''}`}>{'Search'} </button>
      <button type="button" onClick={toggleUnit}>
        Switch to {unit === "metric" ? "Fahrenheit" : "Celsius"}
      </button>
    </form>
  );
};

export default SearchInput;