import React, { Component } from "react";

class Result extends Component {
  state = {};
  render() {
    let { information } = this.props;
    console.log(information);
    return (
      <>
        <div className='weather-wrapper'>
          <div className='icon'>
            <img src={information[8].iconLink} alt='' />
          </div>
          <div className='infor-1'>
            <div className='temperature'>{information[0].temperature}°C</div>
            <div className='city'>
              <div>{information[1].weather}</div>
              <div>{information[2].city}</div>
            </div>
            <div className='date'>
              <div>?</div>
              <div>?</div>
            </div>
          </div>
          <div className='infor-2'>
            <div className='sunset'>
              <div>
                <ion-icon name='sunny-outline'></ion-icon>
              </div>
              <div className='text'>
                <div>?</div>
                <div>Sunset</div>
              </div>
            </div>
            <div className='humidity'>
              <div>
                <ion-icon name='water-outline'></ion-icon>
              </div>
              <div className='text'>
                <div>{information[5].humid}</div>
                <div>Humidity</div>
              </div>
            </div>
            <div className='pressure'>
              <div>
                <ion-icon name='rainy-outline'></ion-icon>
              </div>
              <div className='text'>
                <div>{information[6].pressure}</div>
                <div>Pressure</div>
              </div>
            </div>
            <div className='speed'>
              <div>
                <ion-icon name='shuffle-outline'></ion-icon>
              </div>
              <div className='text'>
                <div>{information[7].wind}</div>
                <div>Speed</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Result;
