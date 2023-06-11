import React, { Component } from 'react';
import countHits from './CountHits';
import naruto from './naruto.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const narutoStyle = {
    width: '50%'
};

class Naruto extends Component {

  render() {

    const {name, addOneHit, hocState, life} = this.props;

    const lifeValue = life >  0 ? (<td>{life}%</td>) 
    : (<td><span className='badge bg-danger'>Mort</span></td>);

    const button = life > 0 ? (<button onClick={addOneHit} className='btn btn-success'  >{name} Frappe</button>)
    :(<button  className='btn btn-danger disabled'  >Mort</button>);

    return (
      <div className='col'>
        <img src={naruto}  alt='naruto' style={narutoStyle} /><br/>
        {button}
        <table className='table table-striped m-3'>
            <thead>
                <tr>
                    <th scope='col'>Coups</th>
                    <th scope='col'>Vie</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {hocState.hits}
                    </td>
                    {lifeValue}
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default countHits(Naruto)