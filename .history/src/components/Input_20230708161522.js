import React,{useRef, useState, useEffect} from "react";

function Input(){

    const[count, setCount] = useState(0);

    useEffect(()=>{
        const increment =  setInterval(()=>{
            setCount(prevCount =>{
                return prevCount + 1;   
            })
        },1000)
    },[]);

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={stopIncrement}>Stop!</button>
        </div>
    )
}

export default Input;