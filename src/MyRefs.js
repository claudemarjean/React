import React, { Component } from 'react'

class MyRefs extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         value: ''
      }

      this.myTitle = React.createRef();

      this.myInput = React.createRef();
    }

    update = event =>{
        this.setState({
            value: event.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) { 
        this.myTitle.current.style.color = 'red';
    } 

    componentDidMount(){
        this.myInput.current.focus();
    }

    handleClick = () =>{
        console.log(this.myInput.current.value);
    }

  render() {
    return (
      <div>
        <h1  ref={this.myTitle} >Valeur: {this.state.value} </h1>
        {/* <input ref={this.myInput} type="text" value={this.state.value} onChange={this.update} /> */}
        <input type="text" ref={this.myInput}/>
        <button onClick={this.handleClick}>Valider</button>
      </div>
    )
  }
}

export default MyRefs