import React, { Component } from 'react';
import pain from './pain.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const painStyle = {
    width: '60%'
};

class Pain extends Component {
    

  render() {
    const {hits, addOne,name} = this.props;
    return (
      <div className='col'>
        <img src={pain}  alt='pain' style={painStyle} /><br/>
        <button onClick={addOne} className='btn btn-success'  >{name} Frappe</button>
        <table className='table table-striped m-3'>
            <thead>
                <tr>
                    <th scope='col'>Coups</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {hits}
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default Pain