import React, { Component } from "react";

class Button extends Component {
  state = {};
  render() {
    let { name, handleClick } = this.props;
    return (
      <>
        <button name={name} onClick={handleClick}>
          {name}
        </button>
      </>
    );
  }
}

export default Button;
