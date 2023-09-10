import { initializeApp } from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { doc,  getFirestore, setDoc, getDoc } from "firebase/firestore"; 

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
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
