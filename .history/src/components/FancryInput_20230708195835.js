import React, {useState} from 'react'

const FancyInput = (props, refs) =>{
    console.log("propsssssss");
    const[count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <input type="text" />
        </div>
    )
}

export default FancyInput;