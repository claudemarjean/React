import React,{useState, useEffect} from 'react'
import './App.css';
import Profile from './components/Profile';
import axios from 'axios'

function App() {

  const[count, setCount] = useState(1);
  const[profile,setProfile] = useState({});
  const[dark, setDark] = useState(false)

  useEffect(()=>{
    axios
    .get(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then(response=>{
      setProfile(response.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[count]);

  const goDark = () =>{
    setDark(!dark)

    if(!dark){
      document.body.classList.add("bg-secondary")
    }
    else(
      document.body.classList.remove("bg-secondary")
    )
  }

  const classBtnTheme = dark ? 'btn-light' : 'btn-dark';
  const textBtnTheme = dark ? 'Rendre clair' : 'rendre sombre';

  const isOverThen = () =>{
    console.log("jesuis dans isOverThen")
    return count > 10
  }

  return (
    <div className='container'>
      <h1 className='text-center'>UseMemo()</h1>
      {isOverThen() && <div className='alert alert-danger' role="alert">STOP!!!</div>}
      <button className="btn btn-info mb-3" onClick={()=>{setCount(count + 1)}}>Increment {count}</button>
      <button className={`btn ${classBtnTheme} mb-3 float-end`} onClick={goDark}>{textBtnTheme}</button>

      <Profile count={count} profile={profile}/>
    </div>
  )
}

export default App