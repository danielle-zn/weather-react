import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function showWeather(response) {
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-dark w-100"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <h1 className="mt-2">{props.defaultCity}</h1>
            <ul>
              <li>Thursday 13:00</li>
              <li className="text-capitalize">{weatherData.description}</li>
              <li>
                Humidity: {weatherData.humidity}% | Wind: {weatherData.wind}
                km/h
              </li>
            </ul>
          </div>
          <div className="col-6 text-end">
            <img src={weatherData.icon} alt={weatherData.description} />
            <div className="current-temp">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0f2efbf7da0a99fa73f8d244bcbbe2f5";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

    return "Loading...";
  }
}
