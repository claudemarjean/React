import React,{Component} from 'react';
import './App.css';
import Naruto from './Naruto';
import Pain from './Pain';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       naruto : 100,
       pain : 100
    }
  }

  reduceLife = param =>{
    if(param === 'Naruto'){
      this.setState({
        pain : this.state.pain - 10
      })
    }
    if(param === 'Pain'){
      this.setState({
        naruto : this.state.naruto - 10
      })
    }
  }

  render(){
    return (
      <div className="container text-center">
        <h1>Naruto vs Pain</h1>
        <hr/>
        <div className='row'>
          <Naruto name='Naruto' life={this.state.naruto} reduceHandler={this.reduceLife}/>
          <Pain name='Pain' life={this.state.pain} reduceHandler={this.reduceLife}/>
        </div>
      </div>
    )
  }
}

export default App;
