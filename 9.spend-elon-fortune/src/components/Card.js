import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    // Để có thể sử dụng props trong construtor function
    // thì phải có super(props)
    // nếu ko có super thì console.log(this.props) sẽ lỗi
    this.state = {
      isVisible: false,
      result: 0,
    };
  }
  static defaultProps = {
    img: "https://i.imgur.com/jImRpPw.jpg",
    title: "Title",
    price: "price",
  };

  render() {
    let { img, title, price, result, minus, add } = this.props;
    return (
      <>
        <div className="col">
          <div className="card h-100">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">USD {price.toLocaleString("en-US")}</p>
              <div className="purchase-footer">
                <button className="sellBtn" onClick={minus}>
                  Sell
                </button>
                <span>{result}</span>
                <button className="buyBtn" onClick={add}>
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
