import React from 'react';
import './App.css';
import ClassCount from './components/ClassCount';
import FunctionCount from './components/FunctionCount';

function App(){
  return(
    <div className='App'>
      <ClassCount/>
      {/* <FunctionCount/> */}
    </div>
  )
}

export default App;