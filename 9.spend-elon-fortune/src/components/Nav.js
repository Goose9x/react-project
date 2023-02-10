import React from "react";

class Nav extends React.Component {
  static defaultProps = {};
  render() {
    let { totalPrice, percentage } = this.props;
    return (
      <>
        <h2 className="Nav">
          <div>Remaining: ${totalPrice.toLocaleString("en-US")}</div>
          <>
            {percentage === 0 ? (
              <div>You haven't spent a single dollar! start buying!</div>
            ) : (
              <div>You have spent {(percentage)*100}% dollar!</div>
            )}
          </>
        </h2>
      </>
    );
  }
}

export default Nav;
