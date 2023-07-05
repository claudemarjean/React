import React,{useState, useEffect} from 'react'
import './App.css';
import Profile from './components/Profile';

function App() {

  const[count, setCount] = useState(1);

  useEffect(()=>{
    effect
  },[input]);

  return (
    <div className='container'>
      <h1 className='text-center'>UseMemo()</h1>
      <button className="btn btn-info mb-3" onClick={()=>{setCount(count + 1)}}>Increment {count}</button>
      <button className="btn btn-dark mb-3 float-end">Changer</button>

      <Profile/>
    </div>
  )
}

export default App