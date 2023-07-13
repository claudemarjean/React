import React,{useRef} from "react";
import FancyInput from "./components/FancryInput";
import "./App.css"

function App(){
  FancyInputRef = useRef();
  const focusInput = ()=>{

  }

  return(
    <div className="App">
      <FancyInput ref={FancyInputRef} />
      <button onClick={focusInput}>Cliquer</button>
    </div>
  );
}

export default App;