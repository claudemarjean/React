
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../App.css';
import Portfolio from '../PortFolio';
import Footer from '../Footer';

function App() {
  return (
    <Router >
          <Routes>
            <Route path='/' element={<Portfolio/>} />
          </Routes>
          <Footer/>
    </Router>
  );
}

export default App;
