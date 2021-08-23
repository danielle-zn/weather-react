import React from "react";
import axios from "axios";

export default function Weather() {
  function showWeather(response) {
    return `The weather in NY is ${response.data.main.temp}`;
  }
  let apiKey = "0f2efbf7da0a99fa73f8d244bcbbe2f5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);

  return <h3>Building my weather app</h3>;
}
