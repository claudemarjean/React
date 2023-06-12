import React,{Component} from 'react';
import './App.css';
import Naruto from './Naruto';
import Pain from './Pain';
import AddHits from './AddHits';


function App() {
  return (
    <div className="container text-center">
      <h1>Naruto vs Pain</h1>
      <hr/>
      <div className='row'>
        <AddHits
          render={
            (hits,addOne, uzumaki) =>(
              uzumaki.Naruto && <Naruto hits={hits} addOne={addOne} name="Naruto" />
            )
          }
        />
        <AddHits
          render={
            (hits,addOne, uzumaki) =>(
              uzumaki.Pain && <Pain hits={hits} addOne={addOne} name="Pain"/>
            )
          }
        />
      </div>
    </div>
  );
}

export default App;
