import React, {Component} from 'react';
import Mycars from './components/Mycars';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {

  state = {
    titre: 'Mon catalogue Voitures'
  }

  render(){
    return (
      <div className="App">
        <Mycars title={this.state.titre} />
      </div>
    );
  }
  
}

export default App;
