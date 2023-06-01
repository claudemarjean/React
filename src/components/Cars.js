import React from "react";

const Car = ({nom, color, year}) =>{
    const couleurInfo = color ? (`Couleur: ${color}`) : ('Couleur: Néant');

    if(nom){
        return(
            <tr>
                <td>Marque: {nom}</td>
                <td>Age: {year}</td>
                <td>{ couleurInfo }</td>
            </tr>
        );
    }
    if(!nom){
        return null
    }
    
}

export default Car;