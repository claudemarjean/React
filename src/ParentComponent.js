import React, { Component } from 'react'
import SimpleComponent from './SimpleComponent'
import PureComp from './PureComponent'
import FunctionComp from './FunctionComp'

class ParentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'Spiderman'
        }
    }

    shouldComponentUpdate(nextProps, nextState) { 
        console.log('shouldComponentUpdate() décide TRUE par défaut'); 
        // console.log(this.state.name);
        // console.log(nextState.name);
        // if(this.state.name !== nextState.name){
        //     return true;
        // }
        return true;
     }

     changeToBatman = () =>{
        this.setState({
            name: 'batman'
        })
    }

    render() {
        console.log('%c RENDER() DU COMPOSANT PARENT','color: red;')

        return (
        <div>
            <p>
                <span className='red'>ParentComponent</span>
                {this.state.name}
            </p>
            <SimpleComponent name={this.state.name}/>
            <PureComp name={this.state.name}/>
            <FunctionComp name={this.state.name}/>
            <button onClick={this.changeToBatman}>Changer en batman</button>
        </div>
        )
    }
}

export default ParentComponent