import React from "react";

class Dice extends React.Component {
  static defaultProps = {};
  render() {
    let { dice1, dice2, dice3, shaking } = this.props;
    return (
      <>
        <div className="dicewrapper">
          <div>
            <i className={`${dice1} ${shaking}`}></i>
          </div>
          <div>
            <i className={`${dice2} ${shaking}`}></i>
          </div>
          <div>
            <i className={`${dice3} ${shaking}`}></i>
          </div>
        </div>
      </>
    );
  }
}

export default Dice;
