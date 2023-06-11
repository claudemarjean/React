import React, { Component } from 'react'
import sasuke from '../sasuke.png'

const styleInline = {
    width: '70%'
  };

class Sasuke extends Component {
    state = {
        bg : ''
      }
    
      handleClick = ()=>{
        this.setState({
          bg : 'bg-danger'
        })
      }

  render() {

    if(this.state.bg === "bg-danger"){
        throw new Error();
    }

    return (
        <div className={`col ${this.state.bg}`}>
        <img onClick={this.handleClick} src={sasuke} alt="sasuke" style={styleInline} />
      </div>
    )
  }
}

export default Sasuke