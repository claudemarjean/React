import React,{useState, useCallback} from "react";
import './App.css';
import Button from "./components/Button";
import Count from "./components/Count";

function App(){

  const[countOne, setCountOne] = useState({value: 0, btnColor:'success',increment: 25});
  const[countTwo, setCountTwo] = useState({value: 0, btnColor:'danger',increment: 20});

  const incrementCountOne = useCallback(val=>{
    console.log("je suis dans incrementCountOne");
    countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val})
  }, [countOne])
  
  

  const incrementCountTwo = useCallback(val=>{
    console.log("je suis dans incrementCountOne");
    countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + val})
  },[countTwo])
  
  

  return (
    <div className="container">
      <Count text="countOne" count={countOne.value} bgColor={countOne.btnColor}/>
      <Count text="countTwo" count={countTwo.value} bgColor={countTwo.btnColor}/>

      <Button handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment} >Count 1</Button>
      <Button handleClick={incrementCountTwo}  btnColor={countTwo.btnColor} increment={countTwo.increment} >Count 2</Button>
    </div>
  );
}

export default App