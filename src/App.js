import React,{Component} from 'react';
import './App.css';
import Modal from './Modal';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       showModal: false
    }
  }

  handleShow = () => {
    this.setState({
      showModal: true
    })
  }

  handleHide = () =>{
    this.setState({
      showModal: false
    })
  }

  render(){
    const modal = this.state.showModal && <Modal close={this.handleHide}/>;
    return (
      <div className="App">
          <button onClick={this.handleShow} >Afficher le modal</button>
          {modal}
      </div>
    )
  }
}

export default App;
