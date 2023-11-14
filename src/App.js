import React from "react";
import PhoneContainer from './components/PhoneContainer';
import {Provider} from 'react-redux';
import store from './redux/store'
import TvContainer from "./components/tvContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="section-one">
        <PhoneContainer/>
        <TvContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
