import "./App.css";
import React from "react";
import RollDice from "./components/RollDice";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: "dice fa-solid fa-dice-one",
      dice2: "dice fa-solid fa-dice-one",
      dice3: "dice fa-solid fa-dice-one",
      status: false,
      title: "Roll",
      shaking: "",
      color: "btn",
      result: "",
    };
    this.rollDice = this.rollDice.bind(this);
  }
  rollDice() {
    let random1 = Math.floor(Math.random() * 6);
    let random2 = Math.floor(Math.random() * 6);
    let random3 = Math.floor(Math.random() * 6);
    let dice1 = this.state.dice1;
    let dice2 = this.state.dice2;
    let dice3 = this.state.dice3;
    let title = this.state.title;
    let status = this.state.status;
    let shaking = this.state.shaking;
    let color = this.state.color;
    title = "Rolling...";
    status = true;
    shaking = "shaking";
    color = "color";
    this.setState({
      title,
      status,
      shaking,
      color,
    });
    setTimeout(() => {
      this.setState({
        title: "Roll",
        status: false,
        shaking: "",
        color: "btn",
      });
    }, 1000);
    if (random1 === 0) {
      random1 = Math.floor(Math.random() * 6);
    }
    if (random2 === 0) {
      random2 = Math.floor(Math.random() * 6);
    }
    if (random3 === 0) {
      random3 = Math.floor(Math.random() * 6);
    }
    // Dice 1
    if (random1 === 1) {
      dice1 = " dice fa-solid fa-dice-one";
      this.setState({
        dice1,
      });
    }
    if (random1 === 2) {
      dice1 = " dice fa-solid fa-dice-two";
      this.setState({
        dice1,
      });
    }
    if (random1 === 3) {
      dice1 = " dice fa-solid fa-dice-three";
      this.setState({
        dice1,
      });
    }
    if (random1 === 4) {
      dice1 = " dice fa-solid fa-dice-four";
      this.setState({
        dice1,
      });
    }
    if (random1 === 5) {
      dice1 = " dice fa-solid fa-dice-five";
      this.setState({
        dice1,
      });
    }
    if (random1 === 6) {
      dice1 = " dice fa-solid fa-dice-six";
      this.setState({
        dice1,
      });
    }
    // Dice 2
    if (random2 === 1) {
      dice2 = "dice fa-solid fa-dice-one";
      this.setState({
        dice2,
      });
    }
    if (random2 === 2) {
      dice2 = "dice fa-solid fa-dice-two";
      this.setState({
        dice2,
      });
    }
    if (random2 === 3) {
      dice2 = "dice fa-solid fa-dice-three";
      this.setState({
        dice2,
      });
    }
    if (random2 === 4) {
      dice2 = "dice fa-solid fa-dice-four";
      this.setState({
        dice2,
      });
    }
    if (random2 === 5) {
      dice2 = "dice fa-solid fa-dice-five";
      this.setState({
        dice2,
      });
    }
    if (random2 === 6) {
      dice2 = "dice fa-solid fa-dice-six";
      this.setState({
        dice2,
      });
    }
    // Dice 3
    if (random3 === 1) {
      dice3 = "dice fa-solid fa-dice-one";
      this.setState({
        dice3,
      });
    }
    if (random3 === 2) {
      dice3 = "dice fa-solid fa-dice-two";
      this.setState({
        dice3,
      });
    }
    if (random3 === 3) {
      dice3 = "dice fa-solid fa-dice-three";
      this.setState({
        dice3,
      });
    }
    if (random3 === 4) {
      dice3 = "dice fa-solid fa-dice-four";
      this.setState({
        dice3,
      });
    }
    if (random3 === 5) {
      dice3 = "dice fa-solid fa-dice-five";
      this.setState({
        dice3,
      });
    }
    if (random3 === 6) {
      dice3 = "dice fa-solid fa-dice-six";
      this.setState({
        dice3,
      });
    }
  }
  render() {
    return (
      <>
        <RollDice
          dice1={this.state.dice1}
          dice2={this.state.dice2}
          dice3={this.state.dice3}
          shaking={this.state.shaking}
          color={this.state.color}
          rollDice={this.rollDice}
          status={this.state.status}
          title={this.state.title}
        />
      </>
    );
  }
}

export default App;
