import React from "react";

const Car = ({children, color, year}) =>{
    const couleurInfo = color ? (<p>Couleur: {color} </p>) : (<p>Couleur: Néant </p>);

    if(children){
        return(
            <div style={{backgroundColor: 'pink', width : '400px', padding: '10px', margin: '5px auto'}}>
                <p>Marque: {children}</p>
                <p>Age: {year}</p>
                { couleurInfo }
            </div>
        );
    }
    if(!children){
        return null
    }
    
}

export default Car;