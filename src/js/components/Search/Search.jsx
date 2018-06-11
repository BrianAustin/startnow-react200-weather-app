import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">History1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">History2</a>
          </li>
        </ul>
        {/* search bar start below */}
        <div className="input-group mb-4">
          <input type="text" className="form-control" placeholder="Enter a place on Earth" aria-label="Enter a place on Earth" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Go!</button>
          </div>
        </div>
      </div>
    );
  }
}