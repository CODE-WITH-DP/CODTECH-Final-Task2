import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};