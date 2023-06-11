import React from "react";

function FunctionComp(props){
    console.log('%c render() du Function Component  enfant simple','color:purple');
    return(
        <div>
            <p>
                <span className="purple">FunctionComponent</span>
                {props.name}
            </p>
        </div>
    )
}

export default React.memo(FunctionComp) ;