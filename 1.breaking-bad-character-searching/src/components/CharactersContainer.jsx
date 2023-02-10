import React, { Component } from "react";
import Result from "./Result";
import SearchBox from "./SearchBox";
import Loading from "../assets/loading.jpg";
class CharactersContainer extends Component {
  state = {};
  render() {
    let {
      profile,
      profileAfterSearch,
      handleClick,
      status,
      handleChange,
      loadingStatus,
      search,
    } = this.props;
    return (
      <>
        <div className='container-wrapper'>
          <SearchBox handleChange={handleChange} search={search} />
          <div className={loadingStatus === true ? "loading" : "notloading"}>
            <img src={Loading} alt='' />
          </div>

          <div className='result'>
            {status === 1
              ? profile.map((e, i) => (
                  <Result key={i} castProfile={e} handleClick={handleClick} />
                ))
              : profileAfterSearch.map((e, i) => (
                  <Result key={i} castProfile={e} handleClick={handleClick} />
                ))}
          </div>
        </div>
      </>
    );
  }
}

export default CharactersContainer;
