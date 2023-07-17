import React, {useState, useContext} from 'react';
import { FirebaseContext } from '../Firebase';

const SignUp = () => {

  const firebase = useContext(FirebaseContext);

  const data = {
    pseudo:'',
    email:'',
    password:'',
    confirmPassword:''
  }

  const[loginData, setLoginData] = useState(data);
  const [error, setError] = useState('')
  
  const handleChange = e =>{
    setLoginData({...loginData, [e.target.id]: e.target.value})
  }

  const handleSubmit = e =>{
    e.preventDefault();
    const { email, password} = loginData;
    firebase.signupUser(email, password)
    .then(user=>{
      setLoginData({...data});
    })
    .catch(error =>{
      setError(error);
      setLoginData({...data});
    })
  }

  const {pseudo, email, password, confirmPassword} = loginData;

  const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword ? <button disabled>Inscription</button> : <button >Inscription</button>

  //gestion erreur
  const  errorMsg = error !== '' && <span>{error.message}</span> 

  return (
    <div className='signUpLoginBox'>
        <div className='slContainer'>
            <div className='formBoxLeftSignup'>
              
            </div>
            <div className='formBoxRight'>
              <div className='formContent'>
                {errorMsg}
              <h2>Inscription</h2>
                <form onSubmit={handleSubmit}>
                  <div className='inputBox'>
                    <input onChange={handleChange} value={pseudo} id='pseudo' autoComplete='off' type="text" required />
                    <label htmlFor='pseudo'>Pseudo</label>
                  </div>
                  <div className='inputBox'>
                    <input onChange={handleChange} value={email} id='email' autoComplete='off' type="email" required />
                    <label htmlFor='email'>Email</label>
                  </div>
                  <div className='inputBox'>
                    <input onChange={handleChange} value={password} id='password' autoComplete='off' type="password" required />
                    <label htmlFor='password'>Mot de passe</label>
                  </div>
                  <div className='inputBox'>
                    <input onChange={handleChange} value={confirmPassword} id='confirmPassword' autoComplete='off' type="password" required />
                    <label htmlFor='confirmPassword'>Confirmer le mot de passe</label>
                  </div>
                  {btn}
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp