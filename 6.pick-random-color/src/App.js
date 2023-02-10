import React from "react";
import "./App.css";
import ColorContainer from "./components/ColorContainer";
import { generateRandomColor } from "./helpers/helpers";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [
        {
          id: 1,
          background: "Black",
        },
        {
          id: 2,
          background: "Lightpink",
        },
        {
          id: 3,
          background: "Red",
        },
        {
          id: 4,
          background: "Lime",
        },
        {
          id: 5,
          background: "Blue",
        },
        {
          id: 6,
          background: "Yellow",
        },
        {
          id: 7,
          background: "Aqua",
        },
        {
          id: 8,
          background: "Fuchsia",
        },
        {
          id: 9,
          background: "Silver",
        },
        {
          id: 10,
          background: "Gray",
        },
        {
          id: 11,
          background: "Maroon",
        },
        {
          id: 12,
          background: "Olive",
        },
        {
          id: 13,
          background: "Green",
        },
        {
          id: 14,
          background: "Purple",
        },
        {
          id: 15,
          background: "Teal",
        },
        {
          id: 16,
          background: "Navy",
        },
        {
          id: 17,
          background: "Tomato",
        },
        {
          id: 18,
          background: "SandyBrown",
        },
      ],
    };
    this.handlerClick = this.handlerClick.bind(this);
  }
  handlerClick(color) {
    console.log(color);
    let { background, id } = color;
    //Lay ra mau ngau nhien
    let randomColor = generateRandomColor();
    // Tìm vị trí index của màu vừa click trong mảng colors nằm trong state
    let index = this.state.color.findIndex((e) => e.id === id);
    let colors = this.state.color;
    // Lưu colors ở trog state vào 1 biến colors để có thể update
    // phần tử con tại vị trí index
    // BỞi vì tihs.state là một object không thể thay đổi được
    colors[index] = {
      id,
      background: randomColor,
    };
    // Lưu mảng colors mới được update màu vừa click vào trong this.state.colors
    this.setState({
      colors: [...colors],
    });
  }
  render() {
    return (
      <>
        <ColorContainer
          handlerClick={this.handlerClick}
          color={this.state.color}
        />
      </>
    );
  }
}

export default App;
