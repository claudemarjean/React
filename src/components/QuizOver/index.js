import React,{Fragment, useEffect, useState} from 'react';
import {GiTrophyCup} from 'react-icons/gi';
import Loader from '../Loader';
import Modal from '../Modal';

const QuizOver = React.forwardRef((props, ref) => {

    const{
        levelNames,
        score,
        maxQuestion,
        quizLevel,
        percent,
        loadLevelQuestions
    } = props;

    const [asked, setAsked] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(()=>{
        setAsked(ref.current)
    },[ref])

    const showModal = id =>{
        setOpenModal(true);
    }

    const hideModal = () =>{
        setOpenModal(false);
    }

    const average = maxQuestion / 2;

    if(score < average){
        setTimeout(()=>loadLevelQuestions(quizLevel),3000);
    }

    const decision = score >= average ? (
        <Fragment>
            <div className='stepsBtnContainer'>
                {
                quizLevel < levelNames.length ?
                (
                    <Fragment>
                        <p className='successMsg'>passez, passez au niveau suivant!</p>
                        <button 
                            className='btnResult success'
                            onClick={()=>loadLevelQuestions(quizLevel)}
                            >
                            Niveau Suivant
                        </button>
                    </Fragment>
                ):
                (
                    <Fragment>
                        <p className='successMsg'>
                        <GiTrophyCup size='50px' /> Bravo, vous êtes un expert !
                        </p>
                        <button 
                            className='btnResult gameOver'
                            onClick={()=>loadLevelQuestions(0)}
                            >
                            Accueil
                        </button>
                    </Fragment>
                )
                }
            </div>
            <div className='percentage'>
                <div className='progressPercent'>
                    Réussite: {percent}%
                </div>
                <div className='progressPercent'>
                    Note: {score}/{maxQuestion}
                </div>
            </div>
        </Fragment>
    ):(
        <Fragment>
            <div className='stepsBtnContainer'>
                <p className='failureMsg'>Vous avez échoué !</p>
            </div>
            <div className='percentage'>
                <div className='progressPercent'>
                    Réussite: {percent}%
                </div>
                <div className='progressPercent'>
                    Note: {score}/{maxQuestion}
                </div>
            </div>
        </Fragment>
    )

    const questionAnswer = score > average ?(
        asked.map(question =>{
            return (
                <tr key={question.id}>
                    <td>
                        {question.question}
                    </td>
                    <td>
                        {question.answer}
                    </td>
                    <td>
                        <button 
                            className='btnInfo'
                            onClick={()=>showModal(question.heroId)}
                        >
                        Infos
                        </button>
                    </td>
                </tr>
            )
        })
    ):(
        <tr >
            <td colSpan='3'>
                <Loader
                    loadingMsg={"Pas de réponses!"}
                    styling={{textAlign: 'center',color: 'red'}}
                />
            </td>
        </tr>
    )
     

    return (
        <Fragment>
            {decision}
            <hr/>
            <p>Les réponses aux questions posées:</p>

            <div className='answerContainer'>
                    <table className='answers'>
                        <thead>
                            <tr>
                                <th>Questions</th>
                                <th>Réponses</th>
                                <th>Infos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questionAnswer}
                        </tbody>
                    </table>
            </div>
            <Modal showModal={openModal} hideModal={hideModal}>
                <div className='modalHeader'>
                    <h2>Titre</h2>
                </div>
                <div className='modalBody'>
                    <h3>Titre</h3>
                </div>
                <div className='modalFooter'>
                    <button className='modalBtn'>Fermer</button>
                </div>
            </Modal>

      </Fragment>
    )
  })


export default React.memo(QuizOver)