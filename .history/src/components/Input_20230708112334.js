import React,{useRef, useState} from "react";

function Input(){

    const [name, setName] = useState(null);
    const usernameRef = useRef(null);
    console.log(usernameRef);

    const handleSubmit = () =>{
        setName(usernameRef.current.value) ;
    }

    return(
        <div>
            <input  ref={usernameRef} type="text"/>
            <button onClick={handleSubmit}>Focus</button>
        </div>
    )
}

export default Input;