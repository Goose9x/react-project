import "./App.css";
import React, { Component } from "react";
import WeatherApp from "./components/WeatherApp";
class App extends Component {
  state = {
    result: "",
    information: [
      {
        temperature: "",
      },
      { weather: "" },
      { city: "" },
      { date: "" },
      { sunSet: "" },
      { humid: "" },
      { pressure: "" },
      { wind: "" },
      { iconLink: "" },
    ],
  };
  handleChange = (e) => {
    this.setState({
      result: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let result = this.state.result;
    let city = result.split(" ").join("").toLowerCase();
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&limit=5&appid=20c04dcb2200db4d43bd03e5034a01e4&units=metric&lang=vi`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          let temperature = data.main.temp;
          let weather = data.weather[0].main;
          let city = `${data.name},${data.sys.country}`;
          let date = new Date(data.dt * 1000);
          let sunSet = data.sys.sunset;
          let humid = data.main.humidity;
          let pressure = data.main.pressure;
          let wind = data.wind.speed;
          let iconLink = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          this.setState({
            result: "",
            information: [
              {
                temperature,
              },
              { weather },
              { city },
              { date },
              { sunSet },
              { humid },
              { pressure },
              { wind },
              { iconLink },
            ],
          });
        } else {
          this.setState({
            result: "",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <WeatherApp
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          result={this.state.result}
          information={this.state.information}
        />
      </>
    );
  }
}

export default App;
