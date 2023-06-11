import React, { Component } from 'react';
import Naruto from './components/Naruto';
import Pain from './components/Pain';
import Sasuke from './components/Sasuke';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container text-center'>
        <h1>Cliquez sur les gentils</h1>
        <div className='row'>
          <ErrorBoundary >
            <Naruto/>
          </ErrorBoundary>
          <ErrorBoundary >
            <Pain/>
          </ErrorBoundary>
          <ErrorBoundary >
            <Sasuke/>
          </ErrorBoundary>
        </div>
      </div>
    )
  }
}

export default App