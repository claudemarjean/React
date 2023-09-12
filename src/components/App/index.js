
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../App.css';
import Header from '../Header';
import Portfolio from '../PortFolio';
import Footer from '../Footer';

import ErrorPage from '../Errorpage';
import { IconContext } from 'react-icons';

function App() {
  return (
    <Router >
        <IconContext.Provider value={{style: {verticalAlign: 'middle'}}}>
          <Header/>

          <Routes>
            <Route path='/' element={<Portfolio/>} />
            <Route path='*' element={<ErrorPage/>} />
          </Routes>

          <Footer/>
        </IconContext.Provider>
    </Router>
  );
}

export default App;
