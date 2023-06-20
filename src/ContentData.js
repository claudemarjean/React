import React from "react";

const ContentData = props =>{
    return(
        <div className="collapset" id="collapseExample">
            <div className="card card-body"> 
                <ul className="list-group list-group-flush">
                    <li className="list-group list-group-flush"><strong>Nom:</strong>{props.userData.name}</li>
                    <li className="list-group-item"><strong>Age:</strong>{props.userData.age}</li>
                </ul>
            </div>
        </div>
    )
}

export default ContentData