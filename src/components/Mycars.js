import React, {Component} from 'react';
import Car from './Cars';

class Mycars extends Component{

    noCopy = () =>{
        alert('merci de ne pas copier le texte');
    }

    addStyle = (e) =>{

        if(e.target.classList.contains('styled')){
            e.target.classList.remove('styled');
        }
        else{
            e.target.classList.add('styled');
        }
    }

    render(){
        return (
            <div>
                <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>

                <p onCopy={this.noCopy}>La classe était considérée comme un “State Component” avant l\’arrivé des Hooks dans React.</p>
                <Car color="red"></Car>
                <Car color="black">Mercedes</Car>
                <Car color="green">Peugeot</Car>
            </div>
        );
    }
}

export default Mycars;