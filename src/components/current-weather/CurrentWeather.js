import React from "react";
import "./currentweather.css";

export default function CurrentWeather({ data }) {
  return (
    <div className="current-weather">
      <div className="top">
        <div>
          <div className="city">{data.city}</div>
          <div className="description">{data.weather[0].description}</div>
        </div>
        <img
          src={require(`../icons/${data.weather[0].icon}.png`)}
          alt="Weather-status"
          className="big-icon"
        />
      </div>
      <div className="bottom">
        <div className="temprature">{Math.round(data.main.temp)}°C</div>
        <div className="details">
          <div className="row">
            <span className="label">Details</span>
          </div>
          <div className="row">
            <span className="label">Fells Like</span>
            <span className="label">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="row">
            <span className="label">Wind</span>
            <span className="label">{data.wind.speed} m/s</span>
          </div>
          <div className="row">
            <span className="label">Humidity</span>
            <span className="label">{data.main.humidity}%</span>
          </div>
          <div className="row">
            <span className="label">Pressure</span>
            <span className="label">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
