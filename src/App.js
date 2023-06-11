import React,{Component} from 'react';
import './App.css';
import Naruto from './Naruto';
import Pain from './Pain';


function App() {
  return (
    <div className="container text-center">
      <h1>Naruto vs Pain</h1>
      <hr/>
      <div className='row'>
        <Naruto render={(uzumaki)=> uzumaki && "Naruto"}/>
        <Pain name="Pain"/>
      </div>
    </div>
  );
}

export default App;
