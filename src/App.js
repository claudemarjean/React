import './App.css';
import Form from './Form';
import Community from './components/Community';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Menu from './components/Menu';
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter >
      <Menu/>

      <Route exact path="/" component={Docs} />
      <Route path="/tutorial" component={Tutorials} />
      <Route strict path="/community/" component={Community} />
    </BrowserRouter>
  );
}

export default App;
