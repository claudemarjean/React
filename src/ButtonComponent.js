import React from "react";

function ButtonComponent(props) {
        return(
            <div>
                <button onClick={props.method}>Changer en batman</button>
            </div>
        )
    
}

export default ButtonComponent;