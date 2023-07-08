import React,{useRef, useState, useEffect} from "react";

function Input(){

    const[count, setCount] = useState(0);

    useEffect(()=>{
        
    },[]);

    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default Input;