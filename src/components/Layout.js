import React,{useState, useEffect, useLayoutEffect} from "react";

function Layout(){
    const[count, setCount] = useState(0);

    useEffect(()=>{
        //Effet
        console.log('Je suis dans useEffect');
    },[count]);

    useLayoutEffect(()=>{
        //Effet
        console.log('Je suis dans useLayoutEffect ');
    },[count]);


    console.log('render')

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count + 1)}>+1</button>
        </div>
    )
}

export default Layout;