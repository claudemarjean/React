import React,{Component} from "react";
import ReactDOM from 'react-dom';

class Modal extends Component{
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
            document.getElementById('second-root')
        )
    }
}

export default Modal;