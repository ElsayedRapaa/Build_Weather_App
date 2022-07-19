import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemHeading,
} from "react-accessible-accordion";
import "./forecast.css";

export default function Forecast({ data }) {
  const week_Day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dayInWeek = new Date().getDay();
  const forecastDay = week_Day
    .slice(dayInWeek, week_Day.length)
    .concat(week_Day.slice(0, dayInWeek));

  return (
    <>
      <label className="daily">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={require(`../icons/${item.weather[0].icon}.png`)}
                    alt="Weather-status"
                    className="small-icon"
                  />
                  <label className="day">{forecastDay[index]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="wrapper">
                <div className="item-panel">
                  <label>Pressure:</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="item-panel">
                  <label>Humidity:</label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div className="item-panel">
                  <label>Clouds:</label>
                  <label>{item.clouds.all} %</label>
                </div>
                <div className="item-panel">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="item-panel">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level} m</label>
                </div>
                <div className="item-panel">
                  <label>Feels like:</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

// Pressure:
// 1018hPa
// Humidity:
// 85%
// Clouds:
// 0%
// Wind speed:
// 3.36 m/s
// Sea level:
// 1018 m
// Feels like:
// 31°C
