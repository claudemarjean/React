import './App.css';
import Form from './Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Community from './components/Community';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route exact path="/" element={<Docs />} />
        <Route path="/tutorial" element={<Tutorials />} />
        <Route strict path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
