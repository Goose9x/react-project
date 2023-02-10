import React from "react";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import Card from "./components/Card";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    // Để có thể sử dụng props trong construtor function
    // thì phải có super(props)
    // nếu ko có super thì console.log(this.props) sẽ lỗi
    this.state = {
      isVisible: false,
      result: 0,
      totalPrice: 270000000000,
      price1: 27000000000,
    };
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
  }
  handleSubtract(e) {
    if (this.state.result > 0) {
      let result = this.state.result;
      result = result - 1;
      let price1 = this.state.price1;
      let { totalPrice } = this.state;
      totalPrice = totalPrice + price1;
      this.setState({
        result,
        totalPrice,
      });
    }
  }
  handlePlus(e) {
    let result = this.state.result;
    result = result + 1;
    let price1 = this.state.price1;
    let { totalPrice } = this.state;
    totalPrice = totalPrice - price1;
    this.setState({
      result,
      totalPrice,
    });
  }
  render() {
    return (
      <>
        <Homepage />
        <Nav
          totalPrice={this.state.totalPrice}
          percentage={(270000000000 - this.state.totalPrice) / 270000000000}
        />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <Card
            img="https://i.imgur.com/jImRpPw.jpg"
            title="AirPods Pro"
            price={this.state.price1}
            result={this.state.result}
            minus={this.handleSubtract}
            add={this.handlePlus}
          />
          <Card
            img="https://i.imgur.com/LUyQhmF.jpg"
            title="Nintendo Switch"
            price="299"
          />
          <Card img="https://i.imgur.com/CugpEfY.jpg" title="PS5" price="499" />
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <Card
            img="https://i.imgur.com/HgPROm3.jpg"
            title="Xbox Series X"
            price="499"
          />
          <Card
            img="https://i.imgur.com/SH7FrjV.jpg"
            title="Iphone 14 Pro Max - 1TB"
            price="1.599"
          />
          <Card
            img="https://i.imgur.com/1Vf4DWy.jpg"
            title="Samsung S22 Ultra - 1TB"
            price="1.399"
          />
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <Card
            img="https://i.imgur.com/69V42nb.jpg"
            title="MacBook Pro 14' M1 Max (64GB RAM | 4TB)"
            price="4.699"
          />
          <Card
            img="https://i.imgur.com/TaO01Rv.jpg"
            title="2022 Mac Studio M1 Ultra (128GB RAM | 8TB)"
            price="6.999"
          />
          <Card
            img="https://i.imgur.com/PXJj7z0.jpg"
            title="Pro Gaming PC(AMD 5950X, RTX 3090, 64GB, 4TB SSD)"
            price="4.950"
          />
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <Card
            img="https://i.imgur.com/XrStrbb.jpg"
            title="Razer Blade 14 Top spec (2022)"
            price="2.799"
          />
          <Card
            img="https://i.imgur.com/Kx4cEmk.jpg"
            title="Mac Pro Top spec (2022) (28 Cores, 8TB SSD, 1TB RAM, 32GB Video)"
            price="53.799"
          />
          <Card
            img="https://i.imgur.com/2fWckgJ.jpg"
            title="Ipad Air M1 Chip (2022) (256GB)"
            price="749"
          />
        </div>
      </>
    );
  }
}

export default App;

// import, export

// 1. export
// --Một file chỉ có thể export default 1 lần

// --Một file có thể export nhiều lần nếu không phải là default

// 2. import
// --Khi import 1 file không được export default, phải có dấu { }
// --Khi import 1 file được export default, không cần dấu { }
