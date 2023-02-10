import React, { Component } from "react";
import CalculatorContainer from "./components/CalculatorContainer";
import "./App.css";
class App extends Component {
  state = {
    result: "",
    button: [
      "AC",
      "C",
      "DEL",
      "/",
      "7",
      "8",
      "9",
      "x",
      "4",
      "5",
      "6",
      "-",
      "1",
      "2",
      "3",
      "+",
      "0",
      ".",
      "=",
    ],
  };
  handleClick = (e) => {
    let button = e.target.name;
    if (
      button === "0" ||
      button === "1" ||
      button === "2" ||
      button === "3" ||
      button === "4" ||
      button === "5" ||
      button === "6" ||
      button === "7" ||
      button === "8" ||
      button === "9" ||
      button === "+" ||
      button === "-" ||
      button === "x" ||
      button === "/"
    ) {
      let result = this.state.result;
      // result.push(button);
      // console.log(result);
      this.setState({
        result: [...result, button].join(""),
      });
    } else if (button === "=") {
      let result = this.state.result;
      let newResult = result.replace("x", "*");
      let sum = eval(newResult);
      this.setState({
        result: String(sum),
      });
    }
  };
  handleChange = (e) => {
    console.log(e.target);
    this.setState({
      result: e.target.value,
    });
  };
  render() {
    return (
      <>
        <CalculatorContainer
          button={this.state.button}
          result={this.state.result}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

export default App;
