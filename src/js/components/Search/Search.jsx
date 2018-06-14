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
    this.handleSearchClick =  this.handleSearchClick.bind(this);
  }

  handleSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearchText(value));
  }

  handleSearchClick() {
    const { searchText, dispatch } = this.props;
    dispatch(searchClickFulfilled(searchText));
  }

  render() {
    const { searchText, data } = this.props;
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">PreLoad1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">PreLoad2</a>
          </li>
        </ul>
        {/* search bar start below */}
        <div className="input-group mb-4">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter a place on Earth" 
            aria-label="Enter a place on Earth" 
            aria-describedby="basic-addon2"
            value={ searchText }
            onChange={ this.handleSearchInput }  
          />
          <div className="input-group-append">
            <button 
              className="btn btn-outline-secondary" 
              type="button"
              onClick={ this.handleSearchClick }
            >Go!
            </button>
          </div>
        </div>
      </div>
    );
  }
}