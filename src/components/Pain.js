import React, { Component } from 'react'
import pain from '../pain.png'
import HOCompnent from './HOCompnent';

const styleInline = {
  width: '80%'
};

class Pain extends Component {
 
  render() {
    const {clickHandle,bgState} = this.props;
    return (
      <div className={`col ${bgState}`}>
        <img onClick={clickHandle} src={pain} alt="pain" style={styleInline}/>
      </div>
    )
  }
}

export default HOCompnent(Pain)