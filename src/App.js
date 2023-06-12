import './App.css';
import Form from './Form';
import Community from './components/Community';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Docs/>
      <Tutorials/>
      <Community/>
    </div>
  );
}

export default App;
