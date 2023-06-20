import React,{Component} from "react";
import naruto from './naruto.png';
import ProfileData from "./ProfileData";

const styleImage = {
    width: '30%'
}

class Profile extends Component {
    render(){
        return(
            <div className="container">
                <h1>{this.props.info.name}</h1>
                <img src={naruto} alt="Naruto" className="img-trumbail mb-3" style={styleImage}/>
                <ProfileData welcome={this.props.info}/>
            </div>
        )
    }
}

export default Profile