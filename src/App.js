import React,{useState} from "react";
import './App.css';
import Button from "./components/Button";
import Count from "./components/Count";

function App(){

  const[countOne, setCountOne] = useState({value: 0, btnColor:'success',increment: 25});
  const[countTwo, setCountTwo] = useState({value: 0, btnColor:'danger',increment: 20});

  return (
    <div className="container">
      <Count count={countOne.value} bgColor={countOne.btnColor}/>
      <Count count={countTwo.value} bgColor={countTwo.btnColor}/>

      <Button >Count 1</Button>
      <Button >Count 2</Button>
    </div>
  );
}

export default App