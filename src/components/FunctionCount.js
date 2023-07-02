import React, {useState, useEffect} from "react";

function FunctionCount(){

    const[count, setCount] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
         document.title = `vous avez cliqué ${count} fois`   
        },2500)
    })

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count + 1)}>Cliquez</button>
        </div>
    )
}

export default FunctionCount