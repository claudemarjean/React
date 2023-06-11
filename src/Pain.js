import React, { Component } from 'react';
import countHits from './CountHits';
import pain from './pain.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const painStyle = {
    width: '60.5%'
};

class Pain extends Component {

  render() {
    const {name, addOneHit, hocState} = this.props;

    return (
      <div className='col'>
        <img src={pain}  alt='pain' style={painStyle} /><br/>
        <button onClick={addOneHit} className='btn btn-success'  >{name} Frappe</button>
        <table className='table table-striped m-3'>
            <thead>
                <tr>
                    <th scope='col'>Coups</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {hocState.hits}
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default countHits(Pain)