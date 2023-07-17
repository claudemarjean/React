import { initializeApp } from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';

const config = {
    apiKey: "AIzaSyB5MHP9EzoEvONVOdd2VgRrKkNiuW4NoqM",
    authDomain: "marvel-quiz-b896b.firebaseapp.com",
    projectId: "marvel-quiz-b896b",
    storageBucket: "marvel-quiz-b896b.appspot.com",
    messagingSenderId: "751455399000",
    appId: "1:751455399000:web:31bc3e51bc11f15e352e2d"
  };

class Firebase {
  constructor() {
    const app = initializeApp(config);
    this.auth = getAuth(app);
  }

  //inscription
  signupUser = (email, password) => {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  //connexion
  loginUser = (email, password) =>{
    return signInWithEmailAndPassword(this.auth,email, password);
  }

  //deconnexion
  signoutUser = () =>  signOut();
  
}

export default Firebase;
