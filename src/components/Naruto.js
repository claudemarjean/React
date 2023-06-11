import React, { Component } from 'react'
import naruto from '../naruto.png'

const styleInline = {
  width: '60%'
};

class Naruto extends Component {

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
        <img onClick={this.handleClick} src={naruto} alt="naruto" style={styleInline} />
      </div>
    )
  }
}

export default Naruto