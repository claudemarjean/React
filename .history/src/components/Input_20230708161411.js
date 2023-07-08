import React,{useRef, useState, useEffect} from "react";

function Input(){

    const[count, setCount] = useState(0);

    useEffect(()=>{
        setInterval(()=>{
            setCount(prevCount =>{
                return prevCount + 1;   
            })
        },1000)
    },[]);

    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default Input;