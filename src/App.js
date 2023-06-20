import './App.css';
import React from 'react';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  state = {
    user:{
      name: 'Naruto',
      age : 30
    }
  }
  render(){
    return (
      <Profile info={this.state.user}/>
    );
  }
  
}

export default App;
