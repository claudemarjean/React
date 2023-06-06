import React, { Component } from 'react'

export class ChildComponent extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
        }
  
        console.log(`je suis dans constructor ENFANT`);
      }

    componentDidMount(){
        console.log('Je suis dans le componentDidMount ENFANT');
    }

    render() {
        console.log(`je suis dans le render() ENFANT`);
        return (
        <div>
            {console.log(`Mise  à jour DOM  ENFANT`)}
            ChildComponent
        </div>
        )
    }
}

export default ChildComponent