import React from "react";

const Car = ({children, color}) =>{
    const couleurInfo = color ? (<p>Couleur: {color} </p>) : (<p>Couleur: Néant </p>);

    if(children){
        return(
            <div style={{backgroundColor: 'pink', width : '400px', padding: '10px', margin: '5px auto'}}>
                <p>Marque: {children}</p>
                { couleurInfo }
            </div>
        );
    }
    if(!children){
        return(
            <div style={{backgroundColor: 'pink', width : '400px', padding: '10px', margin: '5px auto'}}>
                  <p>No data!</p>
            </div>
        )
        

    }
    
}

export default Car;