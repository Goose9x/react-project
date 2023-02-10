import React, { Component } from "react";

class SearchBox extends Component {
  state = {};
  render() {
    let { handleChange, result, handleSubmit } = this.props;
    return (
      <>
        <form className='search-box' onSubmit={handleSubmit}>
          <input
            type='text'
            name='search'
            onChange={handleChange}
            value={result}
          />
          <button>Search</button>
        </form>
      </>
    );
  }
}

export default SearchBox;
