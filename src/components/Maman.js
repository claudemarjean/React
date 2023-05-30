import React,{Component} from "react";
import Toto from "./Toto";

class Maman extends Component{
    state = {
        messageMaman : null,
        messageToto : null
    }

    ordreMaman = () =>{
        this.setState({
            messageMaman : 'Va ranger ta chambre'
        })
    }

    reponseToto = () =>{
        this.setState({
            messageToto : "D'accord maman"
        })
    }

    render(){
        return(
            <div>
                <h1>Maman</h1>
                <button onClick={this.ordreMaman}>Ordres de la mère</button>
                <p>{this.state.messageMaman}</p>
                <hr />
                <Toto name="Toto"  reponseToto={this.reponseToto} leState={this.state} />
            </div>
        )
    }
}

export default Maman;