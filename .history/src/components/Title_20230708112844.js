import React,{useRef} from "react";

function Title(){
    const h1Renders = useRef(0);
    console.log(h1Renders);

    return (
        <div>
            <p>{h1Renders.current}</p>
        </div>
    )
}

export default Title