import React from 'react';

export default class CityInfo extends React.Component {
  constructor(props) {
    super(props);
  }

// Kelvin to F formula: F = 9/5 (K - 273) + 32

  render() {
    return (
      <div className='card border-primary mb-3'>
        <div className='card-header bg-primary'>
          City Information
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-12 col-lg-12'>
              <div className='card text-center'>
                <img className='card-img-top' src='#' alt='weather graphic' />
                <p className='card-text'><small>Lat/Long: 45.354,154.87</small></p>
                <hr />
                <div className='row'>
                  <div className='col-lg-4'>
                    <div className='card text-center card-outline-default'>
                      <p className='card-text font-weight-bold text-center'>Temperature (F)</p>
                      <p className='card-text text-center text-success text-bold'>78.19F</p>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='card text-center card-outline-default'>
                      <p className='card-text font-weight-bold text-center'>Pressure</p>
                      <p className='card-text text-center text-success text-bold'>384</p>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='card text-center card-outline-default'>
                      <p className='card-text font-weight-bold text-center'>Humidity</p>
                      <p className='card-text text-center text-success text-bold'>33%</p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-4'>
                    <div className='card text-center card-outline-default'>
                      <p className='card-text font-weight-bold text-center'>Low Temp (F)</p>
                      <p className='card-text text-center text-success text-bold'>55.19F</p>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='card text-center card-outline-default'>
                      <p className='card-text font-weight-bold text-center'>High Temp (F)</p>
                      <p className='card-text text-center text-success text-bold'>78.1F</p>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='card text-center card-outline-default'>
                      <p className='card-text font-weight-bold text-center'>Wind Speed</p>
                      <p className='card-text text-center text-success text-bold'>7.5mph</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}