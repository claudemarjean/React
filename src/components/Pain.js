import React, { Component } from 'react'
import pain from '../pain.png'

const styleInline = {
  width: '80%'
};

class Pain extends Component {
  state = {
    bg : ''
  }

  handleClick = ()=>{
    this.setState({
      bg : 'bg-success'
    })
  }
  render() {
    return (
      <div className={`col ${this.state.bg}`}>
        <img onClick={this.handleClick} src={pain} alt="pain" style={styleInline}/>
      </div>
    )
  }
}

export default Pain