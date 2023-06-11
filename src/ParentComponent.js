import React, { Component } from 'react'
import SimpleComponent from './SimpleComponent'
import PureComp from './PureComponent'
import FunctionComp from './FunctionComp'
import ButtonComponent from './ButtonComponent'

class ParentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'Spiderman'
        }
    }

    shouldComponentUpdate(nextProps, nextState) { 
        // console.log(this.state.name);
        // console.log(nextState.name);
        if(this.state.name !== nextState.name){
            console.log('shouldComponentUpdate() du composant Parent décide de return  TRUE '); 
            return true;
        }
        console.log('shouldComponentUpdate() du composant Parent décide de return    FALSE '); 
        return false;
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
            <ButtonComponent method={this.changeToBatman}/>
            
        </div>
        )
    }
}

export default ParentComponent