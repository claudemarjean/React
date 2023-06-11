import React,{Component} from 'react';
import './App.css';
import MyRefs from './MyRefs';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.refComponent = React.createRef();
  }
  handleClick = () =>{
    this.refComponent.current.focus();
  }
  render(){
    return (
      <div className="App">
        <MyRefs ref={this.refComponent} name='Toto'/>
  
        <button onClick={this.handleClick}>Valider</button>
      </div>
    )
  }
}

export default App;
