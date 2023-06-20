import React from "react";
import ContentData from "./ContentData";

const ProfileData = props =>{
    console.log(props)
    return(
        <div>
            <div>
                <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample">
                    Information sur {props.welcome.name} ?
                </a>
                <ContentData userData={props.welcome}/>
            </div>
        </div>
    )
}

export default ProfileData