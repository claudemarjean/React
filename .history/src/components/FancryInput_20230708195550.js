import React, {useState} from 'react'

const FancyInput = (props, ref) =>{
    console.log(props);
    console.log(ref);
    const[count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <input type="text" />
        </div>
    )
}

export default FancyInput;