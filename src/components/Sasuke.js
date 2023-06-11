import React, { Component } from 'react'
import sasuke from '../sasuke.png'
import HOCompnent from './HOCompnent';

const styleInline = {
    width: '70%'
  };

class Sasuke extends Component {
  render() {
    const {clickHandle,bgState} = this.props;
    if(bgState === "bg-danger"){
        throw new Error();
    }

    return (
        <div className={`col ${bgState}`}>
        <img onClick={clickHandle} src={sasuke} alt="sasuke" style={styleInline} />
      </div>
    )
  }
}

export default HOCompnent(Sasuke)