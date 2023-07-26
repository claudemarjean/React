import React,{useState} from 'react';
import {Link } from 'react-router-dom';

const Login = () => {

   const[email, setEmail]= useState('');
   const[password, setPassword]= useState('');
   

  return (
    <div className='singUpLoginBox'>
        <div className='slContainer'> 
              <div className='formBoxLeftLogin'>
              
              </div>
              <div className='formBoxRightLogin'>
                <div className='formContent'>
                <h2>Connexion</h2>
                  <form>
                    <div className='inputBox'>
                      <input onChange={e => setEmail(e.target.value)} value={email}  autoComplete='off' type="email" required />
                      <label htmlFor='email'>Email</label>
                    </div>
                    <div className='inputBox'>
                      <input onChange={e => setPassword(e.target.value)} value={password}  autoComplete='off' type="password" required />
                      <label htmlFor='password'>Mot de passe</label>
                    </div>
                    
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