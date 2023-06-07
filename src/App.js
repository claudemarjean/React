import React, { Component } from 'react'
import ParentComponent from './ParentComponent'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ParentComponent/>
      </div>
    )
  }
}

export default App;