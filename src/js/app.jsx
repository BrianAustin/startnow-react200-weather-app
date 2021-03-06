import React from 'react';
import Search from './components/Search';
import CityInfo from './components/CityInfo';
import History from './components/History';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-4'>Brian's Weather Application</h1>
          <p className='lead'>Always know if you'll need a flame thrower...</p>
        </div>
        {/* Search component below */}
        <Search />
          {/* City Info box start below */}
          <div className='row'>
            <div className='col-12 col-md-6 mb-4'>
            {/* Component break start below */}
              <CityInfo />
            {/* closing CITY INFO div below */}
            </div>
            {/* Search History box start below */}
            <div className='col-12 col-md-6 mb-4'>
              <History />
            </div>
            {/* Search History box end above */}            
          {/* closing row div for CITY INFO and SEARCH HISTORY below */}
          </div>  
      {/* closing container div below */}
      </div>
    );
  }
}
