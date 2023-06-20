import React from "react";
import { MyContext } from "./MyContext";

const ContentData = () =>{
    return(
        <MyContext.Consumer>
            {
                data =>{
                    return(
                        <div className="collapset" id="collapseExample">
                            <div className="card card-body"> 
                                <ul className="list-group list-group-flush">
                                    <li className="list-group list-group-flush"><strong>Nom:</strong>{data.name}</li>
                                    <li className="list-group-item"><strong>Age:</strong>{data.age}</li>
                                </ul>
                            </div>
                        </div>
                    )
                }
            }
        </MyContext.Consumer>
        
    )
}

export default ContentData