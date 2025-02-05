import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const ErrorDisplay = () => {
  const { error } = useContext(WeatherContext);

  if (!error) return null;

  return <div style={{ color: "red" }}>{error}</div>;
};

export default ErrorDisplay;