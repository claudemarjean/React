import React,{Component} from "react";
import './myCss.css';
import MyHead from "./myHeaderOne";
import styles from "./myCss.module.css";

class Form extends Component{
    render(){


        return(
            <div>
                <h1 className={styles.green}>Commentaire 1</h1>
                <MyHead/>
                <button>Valider</button>
            </div>
        )
    }
}

export default Form;