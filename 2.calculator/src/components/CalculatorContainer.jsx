import React, { Component } from "react";
import Button from "./Button";
class CalculatorContainer extends Component {
  render() {
    let { button, handleClick, result ,handleChange} = this.props;
    return (
      <>
        <div className='Cal-wrapper'>
          <input onChange={handleChange} className='view-result' type='text' value={result} />
          <div className='Calculator'>
            {button.map((e, i) => (
              <Button key={i} name={e} handleClick={handleClick} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default CalculatorContainer;
