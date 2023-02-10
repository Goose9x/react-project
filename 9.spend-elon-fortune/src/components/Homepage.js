import React from "react";

class Homepage extends React.Component {
  static defaultProps = {};
  render() {
    // let {} = this.props;
    // console.log(this.props);
    return (
      <>
        <div className="image">
          <img src="https://i.imgur.com/Tc9d8Ns.jpg" alt="" />
        </div>
        <div className="title">
          <h1>Spend Elon Musk's Fortune!</h1>
          <p>
            If Elon cashed out all of his stocks &amp; assets today he would
            have approximately <strong>$217,000,000,000</strong> (US Dollars) in
            his bank account.
          </p>
          <p>
            ¿What would you <strong>spend it</strong> on?
          </p>
          <p>Have your receipt at the end!</p>
        </div>
      </>
    );
  }
}

export default Homepage;
