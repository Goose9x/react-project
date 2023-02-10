import React, { Component } from "react";
import SearchBox from "./SearchBox";
import Result from "./Result";

class WeatherApp extends Component {
  state = {};
  render() {
    let { handleChange, result, handleSubmit, information } = this.props;
    console.log(information);
    return (
      <>
        <SearchBox
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          result={result}
        />
        <Result information={information} />
      </>
    );
  }
}

export default WeatherApp;
