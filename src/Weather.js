import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h1 className="mt-2">New York</h1>
          <ul>
            <li>Thursday 13:00</li>
            <li>Mostly Cloudy</li>
            <li>Humidity: 72% Wind: 13 km/h</li>
          </ul>
        </div>
        <div className="col-6 text-end">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />
          <div className="current-temp">
            <span className="temperature">15</span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
