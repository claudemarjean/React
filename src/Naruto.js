import React, { Component } from 'react';
import naruto from './naruto.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const narutoStyle = {
    width: '50%'
};

class Naruto extends Component {
    

  render() {
    const {hits, addOne, name} = this.props;

    return (
      <div className='col'>
        <img src={naruto}  alt='naruto' style={narutoStyle} /><br/>
        <button onClick={addOne} className='btn btn-success' >{name} Frappe</button>
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

export default Naruto