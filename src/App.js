import React,{Component} from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {

  state = {
    age: 27
  }

  render(){
    return (
      <div className="App">
        <MyComponent age={this.state.age}/>
      </div>
    );
  }
  
}

export default App;
