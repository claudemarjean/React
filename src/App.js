import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Community from './components/Community';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Menu from './components/Menu';
import ErrorPage from './components/Errorpage';
import React, { Component } from 'react';
import Profile from './components/Profile';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      underConst: {
        Docs: false,
        Tutorials: true,
        Community: false,
      },
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<Docs />} />
          <Route path='/tutorial' Component={Tutorials}/>
          <Route path="/community" element={<Community />} />
          <Route path="/users/:profileId" element={<Profile />}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
