import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-4'>Brian's Weather Application</h1>
          <p className='lead'>Always know if you'll need a flame thrower!</p>
        </div>
        {/* search bar start below */}
        <div className="input-group mb-4">
          <input type="text" className="form-control" placeholder="Enter a place on Earth" aria-label="Enter a place on Earth" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Go!</button>
          </div>
        </div>
        {/* search bar end above */}
          {/* City Info box start below */}
          <div className='row'>
            <div className='col-12 col-md-6 mb-4'>

            {/* Maybe make the component break right below here??? */}
            <div className='card border-primary mb-3'>
              <div className='card-header bg-info'>
                City Information
              </div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-12 col-lg-12'>
                    <div className='card card-outline-default text-center'>
                      <img className='card-img-top' src='#' alt='weather graphic' />
                      <p className='card-text'><small>Lat/Long: 45.354,154.87</small></p>
                      <hr />
                      <div className='row'>
                        <div className='col-lg-4'>
                          <div className='card card-outline-default text-center'>
                            <p className='card-text font-weight-bold text-center'>Temperature (F)</p>
                            <p className='card-text text-center text-success text-bold'>78.19F</p>
                          </div>
                        </div>
                        <div className='col-lg-4'>
                          <div className='card card-outline-default text-center'>
                            <p className='card-text font-weight-bold text-center'>Temperature (F)</p>
                            <p className='card-text text-center text-success text-bold'>78.19F</p>
                          </div>
                        </div>
                        <div className='col-lg-4'>
                          <div className='card card-outline-default text-center'>
                            <p className='card-text font-weight-bold text-center'>Temperature (F)</p>
                            <p className='card-text text-center text-success text-bold'>78.19F</p>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <div className='card card-outline-default text-center'>
                            <p className='card-text font-weight-bold text-center'>Temperature (F)</p>
                            <p className='card-text text-center text-success text-bold'>78.19F</p>
                          </div>
                        </div>
                        <div className='col-lg-4'>
                          <div className='card card-outline-default text-center'>
                            <p className='card-text font-weight-bold text-center'>Temperature (F)</p>
                            <p className='card-text text-center text-success text-bold'>78.19F</p>
                          </div>
                        </div>
                        <div className='col-lg-4'>
                          <div className='card card-outline-default text-center'>
                            <p className='card-text font-weight-bold text-center'>Temperature (F)</p>
                            <p className='card-text text-center text-success text-bold'>78.19F</p>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* closing CITY INFO div below */}
            </div>
            {/* City Info box end above */}
            {/* Search History box start below */}
            <div className='col-12 col-md-6 mb-4'>
              
            </div>
            {/* Search History box end above */}
          {/* closing row div for CITY INFO and SEARCH HISTORY below   */}
          </div>  

      {/* closing container div below */}
      </div>
    );
  }
}
