import React, { Component } from 'react'

class ClassDisplayKey extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         keycode: null
      }
    }

    handleKeyCode = e=>{
        this.setState({
            keycode: e.code
        })
    }
    componentDidMount(){
        document.addEventListener("keyup", this.handleKeyCode)
    }

    componentWillUnmount() {
        console.log('add event listener a été arrêté');
        document.removeEventListener('keyup',this.handleKeyCode)
     }

  render() {
    const {keycode} = this.state;
    return (
      <div className='card'>
        <div className='card-body'>
            <h1 className='text-center'>{keycode}</h1>
        </div>
      </div>
    )
  }
}

export default ClassDisplayKey