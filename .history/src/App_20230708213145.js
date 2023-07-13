import React, { useRef } from "react";
import FancyInput from "./components/FancyInput";
import "./App.css";

function App() {
  const fancyInputRef = useRef();

  const focusInput = () => {
    fancyInputRef.current.focus();
    fancyInputRef.current.countMax();
  };

  return (
    <div className="App">
      <FancyInput ref={fancyInputRef} />
      <button onClick={focusInput}>Cliquer</button>
    </div>
  );
}

export default App;
