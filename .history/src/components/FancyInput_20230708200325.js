import React, {useState} from 'react'

const FancyInput = React.forwardRef((props, ref)=>{
    const [count, setCount] = useState();

    return (
        <div>
            <h1>{count}</h1>
            <input type="text" />
        </div>
    )
})

export default FancyInput;

