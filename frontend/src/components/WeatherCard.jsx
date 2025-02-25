const WeatherCard = ({ weather }) => {
  if (!weather) return null;
  console.log(weather)
  return (
    <div className="bg-white p-6 rounded shadow-lg text-center flex items-center flex-col gap-4">
      <h2 className="text-2xl font-bold" class>{weather.name}</h2>
      <p className="text-lg">{weather.weather[0].description.toUpperCase()}</p>
      <p className="text-10xl font-semibold">{weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}% <br /> Wind: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;