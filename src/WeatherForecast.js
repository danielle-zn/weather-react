import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function getForecast(response) {
    console.log(response.data);
  }

  const apiKey = "0f2efbf7da0a99fa73f8d244bcbbe2f5";
  const latitude = props.coordinates.lat;
  const longitude = props.coordinates.lon;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getForecast);

  return (
    <div className="WeatherForecast">
      <div className="row mt-4 text-center">
        <div className="col">
          <div className="forecast-day mb-2">Thu</div>
          <WeatherIcon code="01d" size={35} />
          <div className="forecast-temperatures">
            <span className="forecast-temp-max">19°</span>

            <span className="forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
