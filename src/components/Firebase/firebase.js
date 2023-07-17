import { initializeApp } from 'firebase/app';

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
    initializeApp(config);
  }
}

export default Firebase;
