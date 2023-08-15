import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const centerH2 = {
  textAlign : "center"
}

export class App extends Component {
  render() {
    return (
      <div>
        <h3 style={centerH2}>
          Inscription pour #MaConf2020
        </h3>
        <h4>
          Qui êtes vous ?
        </h4>
        <div>
          <label for="">Prénoms*</label>
          <input type="text"  value="Mickael"/>
          <label for="">Nom*</label>
          <input type="text"  value="BARON"/>
        </div>
        <div>
          <label for="">Email address*</label>
          <input type="text"  value="mail"/>
        </div>
        <div>
          <label for="">Sexe</label>
          <input type="radio"  value="mail"/>
          <input type="radio"  value="mail"/>
        </div>
        <div>
          <label for="">Institution*</label>
          <input type="text"  value="institu"/>
        </div>
      </div>
    )
  }
}

export default App