import React,{useRef} from "react";
import FancyInput from "./components/FancryInput";
import "./App.css"

function App(){

  const focusInput = ()=>{

  }

  return(
    <div className="App">
      <FancyInput />
      <button onClick={focusInput}>Cliquer</button>
    </div>
  );
}

export default App;