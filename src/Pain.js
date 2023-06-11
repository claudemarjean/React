import React, { Component } from 'react';
import countHits from './CountHits';
import pain from './pain.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const painStyle = {
    width: '60.5%'
};

class Pain extends Component {

  render() {
    const {name, addOneHit, hocState, life} = this.props;

    const lifeValue = life >  0 ? (<td>{life}%</td>) 
    : (<td><span className='badge bg-danger'>Mort</span></td>);

    const button = life > 0 ? (<button onClick={addOneHit} className='btn btn-success'  >{name} Frappe</button>)
    :(<button  className='btn btn-danger disabled'  >Mort</button>);

    return (
      <div className='col'>
        <img src={pain}  alt='pain' style={painStyle} /><br/>
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

export default countHits(Pain)