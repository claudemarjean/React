import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Community from './components/Community';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Menu from './components/Menu';
import ErrorPage from './components/Errorpage';

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Docs />} />
        <Route path="/tutorial" element={<Tutorials />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
