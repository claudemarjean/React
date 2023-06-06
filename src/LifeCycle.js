import React, { Component } from 'react'

class LifeCycle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Toto',
        step: 1
      }

      console.log(`Etape ${this.state.step} :je suis dans le contructor()`);
    }

    componentDidMount() { 
        console.log(`Etape ${this.state.step} :je suis dans le componentDidMount() `);
        this.setState({
            name: this.props.name,
            step: this.state.step + 1
        })
        console.log(`Etape ${this.state.step} :SET state a changé le state  dans le componentDidMount() `);
     }

     componentDidUpdate(prevProps, prevState){
        console.log(`Etape ${this.state.step} :je suis dans le componentDidUpdate`);
        console.log(prevState);
        console.log(this.state);
     }

    render() {
        console.log(`Etape ${this.state.step} :je suis dans le render()`);
        return (
            <div>
                {console.log(`Etape ${this.state.step} :je suis dans le maj du DOM`)}
                <p>chargement: {this.state.step}</p>
                <p>Nom: {this.state.name}</p>
            </div>
        )
    }
}

export default LifeCycle