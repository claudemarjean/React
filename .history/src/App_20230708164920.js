import React from "react";
import FancyInput from "./components/FancryInput";
import "./App.css"

function App(){
  return(
    <div className="App">
      <FancyInput />
      <button onClick={focusInput}>Cliquer</button>
    </div>
  );
}

export default App;