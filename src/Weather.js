import React from "react";
import axios from "axios";

export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    description: "sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    temperature: 22,
    date: `Wednesday, 13:00`,
    humidity: "5",
    wind: "2",
  };
  return (
    <div className="row">
      <div className="col-6">
        <section className="CurrentCityTemp">
          <div className="current-weather">
            <h1>{weatherData.city}</h1>
            <h3>{weatherData.description}</h3>
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <h1 className="current-temp mt-2">{weatherData.temperature} °C</h1>
          </div>
        </section>
      </div>
      <div className="col-6">
        <div className="WeatherDetails">
          <div className="weather-conditions mt-3">
            <div>Last Updated:</div>
            <h4>{weatherData.date}</h4>
            <br />
            <h4>
              <div>
                <img src={humidity} alt="humidity" className="WeatherIcon" />
                Humidity:{weatherData.humidity}%
              </div>
              <br />
              <div>
                <img src={wind} alt="wind" className="WeatherIcon" />
                Wind:
                {weatherData.wind} km/h
              </div>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
