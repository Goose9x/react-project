import React from "react";
import Dice from "./Dice";
class RollDice extends React.Component {
  render() {
    let { dice1, dice2, dice3, rollDice, status, title, shaking, color } =
      this.props;
    return (
      <>
        <div>
          <Dice dice1={dice1} shaking={shaking} dice3={dice3} dice2={dice2} />
        </div>
        <button className={color} onClick={rollDice} disabled={status}>
          {title}
        </button>
        <div className="result">
          <div>Tài</div>
          <div>Xỉu</div>
        </div>
      </>
    );
  }
}

export default RollDice;
