import React from 'react';

export default class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='card border-primary mb-3'>
        <div className='card-header text-white bg-primary'>Search History</div>
        <div className='card-body'>
          <table className='table table-sm table-hover'>
            <thead>
              <tr>
                <th>City</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>city</td>
                <td><p>date</p><p>time</p></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}