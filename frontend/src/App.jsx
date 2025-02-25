import { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather } from "./services/weatherService";
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      setError("");
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError("City not found. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Weather App</h1>
      <SearchBox onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;