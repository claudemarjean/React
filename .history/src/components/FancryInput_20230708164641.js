import React, {useState} from 'react'

const FancyInput = () =>{
    const[count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}