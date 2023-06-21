import React,{Component} from "react";
import naruto from './naruto.png';
import ProfileData from "./components/ProfileData";
import { MyContext } from "./components/MyContext";

const styleImage = {
    width: '30%'
}

class Profile extends Component {
    render(){

        let value = this.context;
        console.log(value)

        return(
            <div className="container">
                <h1>{this.props.info.name}</h1>
                <p>Age: {value.age} ans</p>
                <img src={naruto} alt="Naruto" className="img-trumbail mb-3" style={styleImage}/>
                <ProfileData welcome={this.props.info}/>
            </div>
        )
    }
}

Profile.contextType = MyContext;
console.log(Profile.contextType)

export default Profile