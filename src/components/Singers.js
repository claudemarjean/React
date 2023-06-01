import React from "react";

const Users = ({name,age}) =>{ //destructuring de l'objet dans le paramètre du fonction flèché
    console.log(name,age);

    return (
        <div>
            <p>Chanteur: </p>
        </div>
    )
}

export default Users;