import React, {Component} from 'react';
import Car from './Cars';

class Mycars extends Component{

    state = {
        voitures : [
            {name: 'Ford', color : 'red', year : 2000},
            {name: 'Mercedes', color : 'black', year : 2010},
            {name: 'Peugeot', color : 'green', year : 2018}   
        ]
    }

    addTenYears = ()=>{
        const updatedState = this.state.voitures.map((param)=>{
            return param.year -= 10
        })
        this.setState({
            updatedState
        })
    }

    render(){
        const year = new Date().getFullYear();

        return (
            <div>
                <h1 >{this.props.title}</h1>

                <button onClick={this.addTenYears}> +10 ans</button>

                 <Car color={this.state.voitures[0].color} year={year - this.state.voitures[0].year + ' ans'}>{this.state.voitures[0].name}</Car>
                 <Car color={this.state.voitures[1].color} year={year - this.state.voitures[1].year + ' ans'}>{this.state.voitures[1].name}</Car>
                 <Car color={this.state.voitures[2].color} year={year - this.state.voitures[2].year + ' ans'}>{this.state.voitures[2].name}</Car>
            </div>
        );
    }
}

export default Mycars;