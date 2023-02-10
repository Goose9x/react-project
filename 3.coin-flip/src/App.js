import React from "react";
import Coin from "./components/Coin";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Để có thể sử dụng props trong construtor function
    // thì phải có super(props)
    // nếu ko có super thì console.log(this.props) sẽ lỗi
    this.state = {
      image: "",
      count: 0,
      head: 0,
      tail: 0,
    };
    this.rollDice = this.rollDice.bind(this);
  }
  rollDice() {
    let { image, count, head, tail } = this.state;
    let random = Math.floor(Math.random() * 6);
    if (random % 2) {
      head = head + 1;
      count = count + 1;
      image = "https://www.pcgs.com/UserImages/50101289o.jpg";
      this.setState({
        image,
        count,
        head,
      });
    } else {
      count = count + 1;
      tail = tail + 1;
      image = "https://www.pcgs.com/UserImages/50101289r.jpg";
      this.setState({
        image,
        count,
        tail,
      });
    }
    if (count == 10) {
      this.setState({
        image: "",
        count: 0,
        head: 0,
        tail: 0,
      });
    }
  }
  render() {
    return (
      <>
        <Coin
          button={this.rollDice}
          image={this.state.image}
          count={this.state.count}
          head={this.state.head}
          tail={this.state.tail}
        />
      </>
    );
  }
}

export default App;
