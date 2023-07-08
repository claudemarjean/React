import React,{useRef} from "react";

function Input(){

    const usernameRef = useRef(null);
    console.log(usernameRef);

    return(
        <div>
            <input  ref={usernameRef} type="text"/>
            <button>Focus</button>
        </div>
    )
}

export default Input;