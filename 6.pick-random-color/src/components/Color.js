import React from "react";

class Color extends React.Component {
  render() {
    let { color, handlerClick } = this.props;
    let style = {
      backgroundColor: color.background,
    };
    return (
      <>
        <div
          onClick={() => handlerClick(color)}
          style={style}
          className="Color"
        >
          Goose
        </div>
      </>
    );
  }
}

export default Color;
