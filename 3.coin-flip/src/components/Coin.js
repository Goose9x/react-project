import React from "react";

class Coin extends React.Component {
  static defaultProps = {};
  render() {
    let { button, image, count, head, tail } = this.props;
    return (
      <>
        <h1 className="title">Let's flip a coin</h1>
        <img className="coin" src={image} alt=""></img>
        <button className="btn" onClick={button}>
          Roll me
        </button>
        <h5 className="title">
          Out of {count} flips,there have been {head} heads and {tail} tails
        </h5>
      </>
    );
  }
}

export default Coin;
