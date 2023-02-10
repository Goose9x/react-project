import React from "react";
import Color from "./Color";

class ColorContainer extends React.Component {
  render() {
    let { color, handlerClick } = this.props;
    return (
      <div className="ColorContainer">
        {color.map((color, index) => (
          <Color handlerClick={handlerClick} key={index} color={color} />
        ))}
      </div>
    );
  }
}

export default ColorContainer;
