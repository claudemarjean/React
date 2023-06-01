import React from "react";

class Users extends React.Component { 
    render(){
        const {name, age} = this.props;
        return (
            <div>
                <p>Chanteur:{name} {age} ans</p>
            </div>
        )
    }
}

export default Users;