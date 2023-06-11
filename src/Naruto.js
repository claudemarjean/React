import React, { Component } from 'react';
import naruto from './naruto.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const narutoStyle = {
    width: '30%'
};

class Naruto extends Component {
    state={
        uzumaki: true,
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
        <img src={naruto}  alt='naruto' style={narutoStyle} /><br/>
        <button onClick={this.addOne} className='btn btn-success' >{this.props.render(this.state.uzumaki)} Frappe</button>
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

export default Naruto