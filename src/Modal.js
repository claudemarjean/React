import React,{Component} from "react";
import ReactDOM from 'react-dom';

class Modal extends Component{
    constructor(props) {
      super(props)
      this.popUpContainer = document.createElement('div');

      document.body.appendChild(this.popUpContainer);
    }

    componentWillUnmount() {
        document.body.removeChild(this.popUpContainer);
     }

    render(){
        return ReactDOM.createPortal(
            <div className="modal" onClick={this.props.close}>
                <div>
                    <p>
                        Les portails fournissent une excellente solution pour afficher des composants enfants dans un noeud en dehors de la hiérachie DOM du composant 
                    </p>
                    <button >
                        Fermer
                    </button>
                </div>
            </div>,
            this.popUpContainer
        )
    }
}

export default Modal;