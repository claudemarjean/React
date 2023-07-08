import React,{useRef, useState} from "react";

function Input(){

    const [name, setState] = useState(null);
    const usernameRef = useRef(null);
    console.log(usernameRef);

    const handleSubmit = () =>{
        usernameRef.current.focus();
    }

    return(
        <div>
            <input  ref={usernameRef} type="text"/>
            <button onClick={handleSubmit}>Focus</button>
        </div>
    )
}

export default Input;