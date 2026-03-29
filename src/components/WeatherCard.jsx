import { useState, useEffect } from "react";

export default function WeatherCard() {
  
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  useEffect(
    () => {
      setError(null);
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=davis&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)
        .then(res => res.json())
        .then(data => {
          if (data.cod !== 200) {
            setError("Weather unavailable right now.");
            return;
          }
          setWeather(data);
        })
        .catch(err => {
          setError("Failed fo fetch weather data!")
        })
      
      
    },[]
  );

  let content;
  if (weather === null) {
    content = "Loading...";
  } else if (error) {
    content = error;
  } else {
    content = (
<>
        <div><b>Weather:</b> {weather.weather[0].description}</div>
        <div><b>Temperature:</b> {weather.main.temp}°C</div>
        <div><b>Humidity:</b> {weather.main.humidity}</div>
      </>
    );
  }


  return (
    <>
      <div>
        {weather === null ? "Loading..." : content}
      </div>
    </>
  );

}
