import React, {Component} from 'react';
import Car from './Cars';

class Mycars extends Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>

                <Car color="red"></Car>
                <Car color="black">Mercedes</Car>
                <Car color="green">Peugeot</Car>
            </div>
        );
    }
}

export default Mycars;