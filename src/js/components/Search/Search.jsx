import React from 'react';

//import action creators below
import {
  updateSearchText,
  searchClickFulfilled
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
    const { value } = event.target;
    console.log(value);
    // dispatch(updateSearchText(value));
    this.handleSearchClick(value);
  }

  handleSearchClick() {
    const { searchText, dispatch } = this.props;
    // const searchText = text ? text : this.props.searchText
    if(searchText == '') {
      return alert('How about you write some text in that search box...')
    } else {
        dispatch(searchClickFulfilled(searchText));
    }  
  }

  render() {
    return (
      <div>
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <button className='nav-link active' type='button'>Search</button>
          </li>
          <li className='nav-item'>
            <button className='nav-link bg-primary text-white' type='button'>Chicago</button>
          </li>
          <li className='nav-item'>
            <button className='nav-link' type='button' value={'New York'} onClick={ this.handlePreLoadedCityClick }>New York</button>
          </li>
          <li className='nav-item'>
            <button className='nav-link' type='button'>London</button>
          </li>
          <li className='nav-item'>
            <button className='nav-link' type='button'>Chiang Mai</button>
          </li>
          <li className='nav-item'>
            <button className='nav-link' type='button'>Taipei</button>
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
              onClick={ this.handleSearchClick }
            >Go!
            </button>
          </div>
        </div>
      </div>
    );
  }
}