const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");
const connectDB = require("./db.js");
const Weather = require("./models/Weather.js");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Fetch weather & save to MongoDB
app.get("/weather", async (req, res) => {
  const { city } = req.query;

  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);

    // Save search to MongoDB
    const newWeather = new Weather({
      city,
      temperature: response.data.main.temp,
      condition: response.data.weather[0].description,
    });
    await newWeather.save();

    res.json(response.data);
  } catch (error) {
    res.status(404).json({ error: "City not found" });
  }
});

// Get search history
app.get("/history", async (req, res) => {
  const history = await Weather.find().sort({ date: -1 }).limit(5); // Last 5 searches
  res.json(history);
});

app.listen(5000, () => console.log("Server running on port 5000"));