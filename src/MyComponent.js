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

    forcerChangement = () =>{
        this.forceUpdate(() =>{
            console.log('je force le changement');
        });
    }

    shouldComponentUpdate(nextProps, nextState) { 
        console.log("je suis dans shoult component update");
        return true;
     }

    render() {
        console.log('Je suis dans le render');
        return (
        <div>
            <p>Nom: {this.props.name}</p>
            <p>Age: {this.props.age}</p>
            <button onClick={this.forcerChangement}>Forcer</button>
        </div>
        )
    }
}

export default MyComponent