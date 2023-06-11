import React, { Component } from 'react'
import naruto from '../naruto.png'
import HOCompnent from './HOCompnent';

const styleInline = {
  width: '60%'
};

class Naruto extends Component {

  render() {
    const {clickHandle,bgState} = this.props;

    return (
      <div className={`col ${bgState}`}>
        <img onClick={clickHandle} src={naruto} alt="naruto" style={styleInline} />
      </div>
    )
  }
}

export default HOCompnent(Naruto)