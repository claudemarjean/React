import React,{useState, Fragment, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import Logout from '../Logout'
import Quiz from '../Quiz'
import Loader from '../Loader';

const Welcome = props => {

  const firebase = useContext(FirebaseContext);
  const[userSession, setUserSession] = useState(null);
  const navigate = useNavigate();
  const[userData, setUserData] = useState({});

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged(user=>{
      user ? setUserSession(user) : navigate('/');
    });

    if(!!userSession){
        firebase.getUser(userSession.uid)
      .then(doc =>{
        if( doc && doc.exists){
          const myData = doc.data();
          setUserData(myData);
        }
      })
      .catch(error=>{
        console.log(error);
      })
    }
    
    return () => {
      listener()
    }
  }, [userSession])
  

  return userSession === null ? (
    <Loader
      loadingMsg={"Authentification ..."}
      styling={{textAlign: 'center',color: '#FFFFFF'}}
    />
  ):
  (
    <div className='quiz-bg container'>
        <div className='Container'>
            <Logout/>
            <Quiz userData={userData}/>
        </div>
    </div>
  )
}

export default Welcome