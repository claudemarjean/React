import React,{Component} from "react";

class AddHits extends Component{
    state={
        hits: 0
    }

    addOne = () =>{
        this.setState( prevState =>{
            return {
                hits: prevState.hits + 1
            }
        }
        )
    }

    render(){
        return(
            <div>
                {this.props.render(this.state.hits, this.addOne)}
            </div>
        )
    }
}

export default AddHits;