import React,{useRef} from "react";
import FancyInput from "./components/FancryInput";
import "./App.css"

function App(){
  const fancyInputRef = useRef();

  const focusInput = ()=>{
     console.log(fancyInputRef.current);
    //  fancyInputRef.current.focus();
  }

  return(
    <div className="App">
      <FancyInput name="toto" ref={fancyInputRef} />
      <button onClick={focusInput}>Cliquer</button>
    </div>
  );
}

export default App;