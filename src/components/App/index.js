
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../App.css';
import Header from '../Header';
import Landing from '../landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import SignUp from '../Signup';
import ErrorPage from '../Errorpage';

function App() {
  return (
    <Router >
        <Header/>

        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/welcome' element={<Welcome/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>

        <Footer/>
    </Router>
  );
}

export default App;
