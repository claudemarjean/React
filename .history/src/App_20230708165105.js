import React,{useRef} from "react";
import FancyInput from "./components/FancryInput";
import "./App.css"

function App(){
  fancyInputRef = useRef();
  const focusInput = ()=>{

  }

  return(
    <div className="App">
      <FancyInput ref={fancyInputRef} />
      <button onClick={focusInput}>Cliquer</button>
    </div>
  );
}

export default App;