import React,{Component, Fragment} from "react";

class AddHits extends Component{
    state={
        fighters:{
            Naruto: true,
            Pain: true
        },
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
            <Fragment>
                {this.props.render(this.state.hits, this.addOne,this.state.fighters)}
            </Fragment>
        )
    }
}

export default AddHits;