import { initializeApp } from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { doc,  getFirestore, setDoc, getDoc } from "firebase/firestore"; 

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
    this.db = getFirestore(app);
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

  //récuperer le mot de passe
  passwordReset = email => sendPasswordResetEmail(this.auth, email);

  addUser = (uid, docData) => {
    setDoc(doc(this.db, "users", uid), docData);
  }

  getUser = uid => {
    return getDoc(doc(this.db, "users", uid));
  }

}

export default Firebase;
