import React, {Component} from 'react';
import Users from './Singers';

class Display extends Component{
    render(){
        return(
            <div>
                    <h1>Musiciens</h1>
                    <Users name="John" age="60"/>
                    <Users name="légende" age="34"/>
                    <Users name="justin bieber" age="40"/>
                    <Users name="eminem" age="32"/>
            </div>
        )
    }
}

export default Display;