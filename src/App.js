import React, { Component, useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const centerH2 = {
  textAlign : "center"
}



const App =  () => {

  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [mail, setMail] = useState('');
  const [sexe, setSexe] = useState(null);
  const [institution, setInstitution] = useState('');
  const [adresse, setAdresse] = useState('');
  const [pays, setPays] = useState('');
  const [codePostal, setCodePostal] = useState('');
  const [ville, setVille] = useState('');
  const [pageWebperso, setPageWebPerso] = useState('');
  const [pageWebInstitut, setPageWebInstitut] = useState('');
  const [inscription, setInscription] = useState(null);
  const [hebergement, setHebergement] = useState(null);
  const [corrigeErreur, setCorrigeErreur] = useState(false);
  const [afficherRecap,setAfficherRecap] = useState(false);

  const hommeElement = document.querySelector("#homme");
  const femmeElement = document.querySelector("#femme");
  const inscriptionUn = document.querySelector("#inscrUn");
  const inscriptionDeux = document.querySelector("#inscrDeux");
  const inscriptionTrois = document.querySelector("#inscrTrois");
  const hebUn = document.querySelector("#hebUn");
  const hebDeux = document.querySelector("#hebDeux");

  const erreurPrenom = prenom === '' && <li className="card-text">Prénom obligatoire.</li>;
  const erreurNom = nom ==='' && <li className="card-text">Nom obligatoire.</li>;
  const erreurMail = mail ==='' && <li className="card-text">Adresse Email obligatoire.</li>;
  const erreurSexe = sexe === null && <li className="card-text">Choix sexe obligatoire.</li>;
  const erreurInstitution = institution ==='' && <li className="card-text">Institution obligatoire.</li>;
  const erreurAdresse = adresse === '' && <li className="card-text">Adresse obligatoire.</li>;
  const erreurPays = pays ==='' && <li className="card-text">Pays obligatoire.</li>;
  const erreurCodePostal = codePostal === '' && <li className="card-text">Code postal obligatoire.</li>;
  const erreurVille = ville ==='' && <li className="card-text">Ville obligatoire.</li>;
  const erreurInscription = inscription === null && <li className="card-text">Formule d'inscription obligatoire.</li>;
  const erreurHebergement = hebergement === null && <li className="card-text">Moyen d'hébergement obligatoire.</li>;

  const handlePrenom = e =>{
    setPrenom(e.target.value);
  }

  const handleNom = e =>{
    setNom(e.target.value);
  }

  const handleMail = e =>{
    setMail(e.target.value);
  }

  const handleSexe = e =>{
    e.target.id === 'homme' ?  (setSexe(1)) : (setSexe(0));
  }

  const handleInstitution = e=>{
    setInstitution(e.target.value);
  }

  const handleAdresse = e =>{
    setAdresse(e.target.value);
  }
  const handlePays = e =>{
    setPays(e.target.value);
  }
  const handleCodePostal = e =>{
    setCodePostal(e.target.value);
  }
  const handleVille = e =>{
    setVille(e.target.value);
  }
  const handlepageWebperso = e =>{
    setPageWebPerso(e.target.value);
  }
  const handlepageWebInstitut = e =>{
    setPageWebInstitut(e.target.value);
  }
  const handleInscription = e =>{
     if(e.target.id == 'inscrUn') setInscription(150);
     if(e.target.id == 'inscrDeux') setInscription(200);
     if(e.target.id == 'inscrTrois') setInscription(300);
    
  }

  const handleHebergement = e =>{
    if(e.target.id == 'hebUn') setHebergement(150);
    if(e.target.id == 'hebDeux') setHebergement(0);
  }

  const handlePreValidate = e =>{
    if( prenom === ''  || 
      nom ==='' || 
      mail ===''  || 
      sexe === null  || 
      institution ==='' ||  
      adresse === '' ||
      pays ==='' ||
      codePostal === '' ||
      ville ==='' ||
      inscription === null ||
      hebergement === null ){
        setCorrigeErreur(true)
      }
      else{
        setAfficherRecap(true);
      }
  }


  const formCorrigeErreur = corrigeErreur && (
    <div className="card border-default mb-3" >
    <div className="card-header">Corriger les erreurs suivantes</div>
    <div className="card-body">
      {erreurPrenom}
      {erreurNom}
      {erreurMail}
      {erreurSexe}
      {erreurInstitution}
      {erreurAdresse}
      {erreurPays}
      {erreurCodePostal}
      {erreurVille}
      {erreurInscription}
      {erreurHebergement}
      
    </div>
  </div>
  );

  const recapitulatif = afficherRecap && (
    <div className="card border-default mb-3 mt-4" >
      <div className="card-header">Récapitulatif de l'inscription</div>
      <div className="card-body">
        <p>
          Bonjour {sexe == 0 ? 'Madame' : 'Monsieur'} {prenom} {nom}, vous avez procédé à une inscription pour la conférence #MaConf2020.<br/>
          Le détail de votre enregistrement est le suivant:
          <li>Académique {inscription} EUR</li>
          <li>avec réservation {hebergement} EUR</li>
          Le montant total est de {inscription + hebergement } EUR.<br/>
          Un email vous sera envoyé prochainnement à cette adresse {mail} pour la mise en paiement de votre inscription.<br/>
          Merci de consulter votre messagerie et de procéder au réglement de votre inscription.<br/>
          En vous remerciant de votre inscription, à très bientôt à la conférence #MaConf2020.
        </p>
        <button type='button' className='btn btn-primary' >Confirmer</button>
        <button type='button' className='btn btn-primary ' >Modifier les données</button>
        
      </div>
    </div>
  );
  

  const checkInscription = useEffect(()=>{
    if(inscription !== null){
      if(inscription === 150){
        inscriptionUn.checked = true;
        inscriptionDeux.checked = false;
        inscriptionTrois.checked = false;
      }
      if(inscription === 200){
        inscriptionUn.checked = false;
        inscriptionDeux.checked = true;
        inscriptionTrois.checked = false;
      }
      if(inscription === 300){
        inscriptionUn.checked = false;
        inscriptionDeux.checked = false;
        inscriptionTrois.checked = true;
      }
    }
  },[inscription]);

  const checkSexe = useEffect(()=>{
    if(sexe !== null){
      if(sexe === 1){
        hommeElement.checked = true;
        femmeElement.checked = false;
      }
      if(sexe === 0){
        femmeElement.checked = true;
        hommeElement.checked = false;
      }
    }
  },[sexe]);

  const checkHebergement = useEffect(()=>{
    if(hebergement !== null){
      if(hebergement === 150){
        hebUn.checked = true;
        hebDeux.checked = false;
      }
      if(hebergement === 0){
        hebUn.checked = false;
        hebDeux.checked = true;
      }
    }
    
  },[hebergement]);

    return (
      <div className='container'>
        <h3 style={centerH2}>
          Inscription pour #MaConf2020
        </h3>
        {formCorrigeErreur}
        <h4>
          Qui êtes vous ?
        </h4>
        <div className='container'>
          <div className='row '>
            <div className='col'>
              <label for="" className='form-label'>Prénoms*</label>
              <input type="text" onChange={handlePrenom} className='form-control' value={prenom} />
            </div>
            <div className='col'>
              <label for="" className='form-label'>Nom*</label>
              <input type="text" onChange={handleNom} className='form-control'  value={nom}/>
            </div>
          </div>
        </div>
        <div className='container'>
          <label for="" className='form-label'>Email address*</label>
          <input type="email" onChange={handleMail} className='form-control' value={mail}/>
        </div>

        <div className='container'>
          <div>
            <label className='form-label' >Sexe</label>
          </div>
         <div className='row'>
          <div className='col-2'>
            <input type="radio" onChange={handleSexe} className='form-check-input' id='homme'   />
            <label for="radio" className='form-check-label' >Je suis un homme</label>
          </div>
          <div className='col-2'>
            <input type="radio" onChange={handleSexe} className='form-check-input' id='femme'  />
            <label for="radio" className='form-check-label'>Je suis une femme</label>
          </div>
         </div>
        </div>

        <div className='container'>
          <label for="" className='form-label'>Institution*</label>
          <input onChange={handleInstitution} type="text" className='form-control' />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col'>
                <label for="" className='form-label'>Adresse*</label>
                <input onChange={handleAdresse} className='form-control' type="text" name="" value={adresse} />
              </div>
              <div className='col'>
                <label for="" className='form-label'>Pays*</label>
                <input onChange={handlePays} className='form-control' type="text" name="" value={pays}/>
              </div>  
          </div>
          <div className='row'>
            <div className='col'>
                <label for="" className='form-label'>Code Postal*</label>
                <input onChange={handleCodePostal} className='form-control' type="text" name="" value={codePostal}/>
              </div>
              <div className='col'>
                <label for="" className='form-label'>Ville*</label>
                <input onChange={handleVille} className='form-control' type="text" name="" value={ville}/>
              </div>  
          </div>
          <div className='row'>
            <div className='col'>
                <label for="" className='form-label'>Page web personnelle</label>
                <input onChange={handlepageWebperso} className='form-control' type="text" name="" value={pageWebperso}/>
              </div>
              <div className='col'>
                <label for="" className='form-label'>Page web institution</label>
                <input onChange={handlepageWebInstitut} className='form-control' type="text" name="" value={pageWebInstitut}/>
              </div>  
          </div>
        </div>
        
        <hr/>

        <h3>Quelle inscription souhaitez-vous?</h3>
        <div >
          <input onChange={handleInscription} className='form-check-input' type="radio" id='inscrUn' />
          <label className='form-check-label' for="">Etudiant (150 EUR)</label>
        </div>
        <div >
          <input onChange={handleInscription} className='form-check-input' type="radio" id='inscrDeux' />
          <label className='form-check-label' for="">Etudiant (200 EUR)</label>
        </div>
        <div >
          <input onChange={handleInscription} className='form-check-input' type="radio" id='inscrTrois' />
          <label className='form-check-label' for="">Etudiant (300 EUR)</label>
        </div>

        <hr/>

        <h3>Quelle hébergement souhaitez-vous?</h3>
        <div >
          <input onChange={handleHebergement} className='form-check-input' type="radio" id='hebUn' />
          <label className='form-check-label' for="">Avec réservation (150 EUR)</label>
        </div>
        <div >
          <input onChange={handleHebergement} className='form-check-input' type="radio" id='hebDeux' />
          <label className='form-check-label' for="">sans réservation (0 EUR)</label>
        </div>

        <hr/>
        <button type='button' onClick={handlePreValidate} className='btn btn-primary' >Pré-valider</button>
        {recapitulatif}
      </div>
    )
  }

export default App