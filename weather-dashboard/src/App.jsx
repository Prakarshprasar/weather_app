import { WeatherProvider } from "./context/WeatherContext";
import SearchInput from "./components/SearchInput";
import WeatherDisplay from "./components/WeatherDisplay";
import ForecastDisplay from "./components/ForecastDisplay";
import ErrorDisplay from "./components/ErrorDisplay";

const App = () => {
  return (
    <WeatherProvider>
      <div >
        <h1>Weather Dashboard</h1>
        <SearchInput />
        <ErrorDisplay />
        <WeatherDisplay />
        <ForecastDisplay />
      </div>
    </WeatherProvider>
  );
};

export default App;