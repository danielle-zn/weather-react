import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-6">
          <h1 className="mt-2">{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              Humidity: {props.data.humidity}% | Wind: {props.data.wind}
              km/h
            </li>
          </ul>
        </div>
        <div className="col-6 text-end ">
          <WeatherIcon code={props.data.icon} size={80} />
          <div className="current-temp">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
