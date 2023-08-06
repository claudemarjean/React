import React,{useState, Fragment, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import Logout from '../Logout'
import Quiz from '../Quiz'

const Welcome = props => {

  const firebase = useContext(FirebaseContext);
  const[userSession, setUserSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged(user=>{
      user ? setUserSession(user) : navigate('/');
    });

    return () => {
      listener()
    }
  }, [])
  

  return userSession === null ? (
    <Fragment>
      <div className='loader'></div>
      <p>Loading</p>
    </Fragment>
  ):
  (
    <div className='quiz-bg'>
        <div className='Container'>
            <Logout/>
            <Quiz/>
        </div>
    </div>
  )
}

export default Welcome