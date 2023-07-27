import React,{useState, useEffect, useContext} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const Login = () => {

  const firebase = useContext(FirebaseContext);
  const navigate = useNavigate();

   const[email, setEmail]= useState('');
   const[password, setPassword]= useState('');
   const [btn,setBtn] = useState(false);
   const[error, setError] = useState('');

  useEffect(()=>{
    if(password.length > 5 && email !== ''){
      setBtn(true);
    }else if(btn){
      setBtn(false);
    }
  },[password, email, btn])
   
  const handleSubmit = e =>{
    e.preventDefault();
    firebase.loginUser(email,password)
    .then(user=>{
      console.log(user);
      setEmail('');
      setPassword('');
      navigate('/welcome');
    })
    .catch(error=>{
      setError(error);
      setEmail('');
      setPassword('');
    })
  }

  return (
    <div className='singUpLoginBox'>
        <div className='slContainer'> 
              <div className='formBoxLeftLogin'>
              
              </div>
              <div className='formBoxRightLogin'>
                <div className='formContent'>

                {error !== '' && <span>{error.message}</span>}
                  
                <h2>Connexion</h2>
                  <form onSubmit={handleSubmit}>
                    <div className='inputBox'>
                      <input onChange={e => setEmail(e.target.value)} value={email}  autoComplete='off' type="email" required />
                      <label htmlFor='email'>Email</label>
                    </div>
                    <div className='inputBox'>
                      <input onChange={e => setPassword(e.target.value)} value={password}  autoComplete='off' type="password" required />
                      <label htmlFor='password'>Mot de passe</label>
                    </div>
                    {btn ? <button>Connexion</button>:<button disabled>Connexion</button>}
                  </form>
                  <div className='linkContainer'>
                    <Link className='simpleLink' to='/signup'>Nouveau sur marvel Quiz? Inscrivez-vous maintenant</Link>
                  </div>
                </div>
              </div>
          </div>
    </div>
  )
}

export default Login