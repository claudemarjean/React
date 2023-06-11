import React, { Component } from 'react';
import pain from './pain.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const painStyle = {
    width: '36.4%'
};

class Pain extends Component {
    state={
        hits: 0
    }

    addOne = () =>{
        this.setState( prevState =>{
            return {
                hits: prevState.hits + 1
            }
        }
        )
    }

  render() {
    return (
      <div className='col'>
        <img src={pain}  alt='pain' style={painStyle} /><br/>
        <button onClick={this.addOne} className='btn btn-success'  >Frapper</button>
        <table className='table table-striped m-3'>
            <thead>
                <tr>
                    <th scope='col'>Coups</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {this.state.hits}
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default Pain