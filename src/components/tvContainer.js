import React from "react";
import tv from "../images/tv.png"

function TvContainer(){
    return(
        <div className="container">
            <img src={tv} alt="tv"/>
            <p>Disponibilité:
                <span id="count"></span>
            </p>
            <button>Acheter</button>
        </div>
    )
}


export default TvContainer