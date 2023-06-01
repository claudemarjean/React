import React from "react";

const Users = props =>{
    const {name,age} = props; //destructuring de l'objet props
    console.log(name,age);

    return (
        <div>
            <p>Chanteur: </p>
        </div>
    )
}

export default Users;