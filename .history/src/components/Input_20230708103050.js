import React,{useRef} from "react";

function Input(){

    const usernameRef = useRef(null)

    return(
        <div>
            <input type="text"/>
            <button>Focus</button>
        </div>
    )
}

export default Input;