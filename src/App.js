import React, { useState } from "react";

// Componenet
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forecast from "./components/forecast-weather/Forecast";

// Data API
import { API_KEY, CURRENT_WEATHER } from "./DataAPI";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearchData = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${CURRENT_WEATHER}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${CURRENT_WEATHER}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const currentWeather = await response[0].json();
        const forecasetWeather = await response[1].json();

        setWeather({ city: searchData.label, ...currentWeather });
        setForecast({ city: searchData.label, ...forecasetWeather });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <Search handleOnSearch={handleSearchData} />
      {weather && <CurrentWeather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}
