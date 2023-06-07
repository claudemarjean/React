import React, { Component } from 'react'
import SimpleComponent from './SimpleComponent'

class ParentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'Spiderman'
        }
    }

    shouldComponentUpdate(nextProps, nextState) { 
        console.log('je suis dans shouldComponentUpdate'); 
        console.log(this.state.name);
        console.log(nextState.name);
        if(this.state.name !== nextState.name){
            return true;
        }
        return false;
     }

     changeToBatman = () =>{
        this.setState({
            name: 'batman'
        })
    }

    render() {
        console.log('%c RENDER() DU COMPOSANT PARENT','color: white;')

        return (
        <div>
            <SimpleComponent/>
            <button onClick={this.changeToBatman}>Changer en batman</button>
        </div>
        )
    }
}

export default ParentComponent