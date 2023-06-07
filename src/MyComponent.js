import React, { Component } from 'react'

class MyComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'spiderman'
      }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('%c getDerivedStateFromProps','color: red; background: yellow; font-size: 15px');
        console.log(props);
        console.log(state);
        return null;
    }

    render() {
        return (
        <div>
            <p>Nom: {this.props.name}</p>
            <p>Age: {this.props.age}</p>
        </div>
        )
    }
}

export default MyComponent