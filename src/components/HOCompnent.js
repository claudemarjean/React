import React,{Component} from "react";

const hOCompnent = WrappedComponent =>{
    class HOCompnent extends Component{
        state = {
            bg : ''
          }
        
          handleClick = ()=>{
            if(WrappedComponent.name === "Sasuke"){
                this.setState({
                    bg : 'bg-danger'
                  })   
            }
            else{
                this.setState({
                    bg : 'bg-success'
                  }) 
            }
            
          }
        render(){
            
            return <WrappedComponent bgState={this.state.bg} clickHandle={this.handleClick}/>
        }
    }
    return HOCompnent;
}

export default hOCompnent;