import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const centerH2 = {
  textAlign : "center"
}

export class App extends Component {
  render() {
    return (
      <div className='container'>
        <h3 style={centerH2}>
          Inscription pour #MaConf2020
        </h3>
        <h4>
          Qui êtes vous ?
        </h4>
        <div className='container'>
          <div className='row '>
            <div className='col'>
              <label for="" className='form-label'>Prénoms*</label>
              <input type="text" className='form-control' value="Mickael"/>
            </div>
            <div className='col'>
              <label for="" className='form-label'>Nom*</label>
              <input type="text" className='form-control'  value="BARON"/>
            </div>
          </div>
        </div>
        <div className='container'>
          <label for="" className='form-label'>Email address*</label>
          <input type="text" className='form-control' value="mail"/>
        </div>

        <div className='container'>
          <div>
            <label className='form-label' >Sexe</label>
          </div>
         <div className='row'>
          <div className='col-2'>
            <input type="radio"   value="mail"/>
            <label for="radio" className='form-label'>Je suis un homme</label>
          </div>
          <div className='col-2'>
            <input type="radio"  value="mail"/>
            <label for="radio">Je suis une femme</label>
          </div>
         </div>
        </div>

        <div className='container'>
          <label for="" className='form-label'>Institution*</label>
          <input type="text" className='form-control' value="institu"/>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col'>
                <label for="" className='form-label'>Adresse*</label>
                <input className='form-control' type="text" name="" value=""/>
              </div>
              <div className='col'>
                <label for="" className='form-label'>Pays*</label>
                <input className='form-control' type="text" name="" value=""/>
              </div>  
          </div>
          <div className='row'>
            <div className='col'>
                <label for="" className='form-label'>Code Postal*</label>
                <input className='form-control' type="text" name="" value=""/>
              </div>
              <div className='col'>
                <label for="" className='form-label'>Ville*</label>
                <input className='form-control' type="text" name="" value=""/>
              </div>  
          </div>
          <div className='row'>
            <div className='col'>
                <label for="" className='form-label'>Page web personnelle</label>
                <input className='form-control' type="text" name="" value=""/>
              </div>
              <div className='col'>
                <label for="" className='form-label'>Page web institution</label>
                <input className='form-control' type="text" name="" value=""/>
              </div>  
          </div>
        </div>
        
        <hr/>

        <h3>Quelle inscription souhaitez-vous?</h3>
        <div >
          <input className='form-check-input' type="radio" name="" value=""/>
          <label className='form-check-label' for="">Etudiant (150 EUR)</label>
        </div>
        <div >
          <input className='form-check-input' type="radio" name="" value=""/>
          <label className='form-check-label' for="">Etudiant (200 EUR)</label>
        </div>
        <div >
          <input className='form-check-input' type="radio" name="" value=""/>
          <label className='form-check-label' for="">Etudiant (300 EUR)</label>
        </div>

        <hr/>

        <h3>Quelle hébergement souhaitez-vous?</h3>
        <div >
          <input className='form-check-input' type="radio" name="" value=""/>
          <label className='form-check-label' for="">Avec réservation (150 EUR)</label>
        </div>
        <div >
          <input className='form-check-input' type="radio" name="" value=""/>
          <label className='form-check-label' for="">sans réservation (0 EUR)</label>
        </div>

        <hr/>
        <button type='button' className='btn btn-primary' >Pré-valider</button>
      </div>
    )
  }
}

export default App