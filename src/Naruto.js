import React, { Component } from 'react';
import countHits from './CountHits';
import naruto from './naruto.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const narutoStyle = {
    width: '50%'
};

class Naruto extends Component {

  render() {

    const {name, addOneHit, hocState} = this.props;

    return (
      <div className='col'>
        <img src={naruto}  alt='naruto' style={narutoStyle} /><br/>
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

export default countHits(Naruto)