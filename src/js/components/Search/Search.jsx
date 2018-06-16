import React from 'react';

//import action creators below
import {
  updateSearchText,
  searchClickFulfilled,
  updateHistory
} from './searchActions';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handlePreLoadedCityClick = this.handlePreLoadedCityClick.bind(this);
    this.handleSearchClick =  this.handleSearchClick.bind(this);
  }

  handleSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearchText(value));
  }

  handlePreLoadedCityClick(event) {
    const { dispatch } = this.props;
    dispatch(searchClickFulfilled(event.target.value));
    dispatch(updateSearchText(event.target.value));
    dispatch(updateHistory(event.target.value));
  }

  handleSearchClick() {
    const { searchText, dispatch } = this.props;
    // const searchText = text ? text : this.props.searchText
    if(searchText == '') {
      return alert('How about you write some text in that search box...')
    } else {
        dispatch(searchClickFulfilled(searchText));
        dispatch(updateHistory(searchText));
    }  
  }

  render() {
    const searchText = this.props.searchText;
    return (
      <div>
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <button className='nav-link active' type='button'>Search</button>
          </li>
          <li className='nav-item'>
            <button className='nav-link' type='button' value='Chicago' onClick={ this.handlePreLoadedCityClick }>Chicago</button>
          </li>
          <li className='nav-item'>
            <button className='nav-link' type='button' value='New York' onClick={ this.handlePreLoadedCityClick }>New York</button>
          </li>
          <li className='nav-item'>
            <button className='nav-link' type='button' value='London' onClick={ this.handlePreLoadedCityClick }>London</button>
          </li>
          <li className='nav-item'>
            <button className='nav-link' type='button' value='Chiang Mai' onClick={ this.handlePreLoadedCityClick }>Chiang Mai</button>
          </li>
          <li className='nav-item'>
            <button className='nav-link' type='button' value='Taipei' onClick={ this.handlePreLoadedCityClick }>Taipei</button>
          </li>
        </ul>
        {/* search bar start below */}
        <div className='input-group mb-4'>
          <input 
            type='text' 
            className='form-control' 
            placeholder='Enter a city on Earth' 
            aria-label='Enter a city on Earth' 
            aria-describedby='basic-addon2'
            onChange={ this.handleSearchInput }  
          />
          <div className='input-group-append'>
            <button 
              className='btn btn-primary'
              type='button'
              value={ searchText }
              onClick={ this.handleSearchClick }
            >Go!
            </button>
          </div>
        </div>
      </div>
    );
  }
}