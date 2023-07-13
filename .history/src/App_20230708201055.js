import React, { useRef } from "react";
import FancyInput from "./components/FancyInput";
import "./App.css";

function App() {
  const fancyInputRef = useRef();

  const focusInput = () => {
    console.log(fancyInputRef.current);
    fancyInputRef.current.focus();
  };

  return (
    <div className="App">
      <FancyInput ref={fancyInputRef} />
      <button onClick={focusInput}>Cliquer</button>
    </div>
  );
}

export default App;
