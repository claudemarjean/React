import React from "react";
import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";


function App(){
  return(
    <div>
      <h1 className="text-center">UseState Hooks</h1>
      <ClassState/>
      <hr/>
      <FunctionState/>
    </div>
  )
}

export default App