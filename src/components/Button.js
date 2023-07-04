import React from "react";

function Button({handleClick,btnColor,increment, children }){
    return <button onClick={()=>handleClick(increment)} className={`btn btn-${btnColor} mt-3 `}>+{increment} %</button>
}

export default Button