import './App.css';
import React from 'react';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MyContext} from './components/MyContext';

class App extends React.Component {

  state = {
    user:{
      name: 'Naruto',
      age : 30
    }
  }
  render(){

    return (
      <MyContext.Provider value={this.state.user}>
        <Profile info={this.state.user}/>
      </MyContext.Provider>
      
    );
  }
  
}

export default App;
