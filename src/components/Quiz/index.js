import React,{Component} from 'react'
import { QuizMarvel } from '../quizMarvel'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuizOver from '../QuizOver';

toast.configure();


class Quiz extends Component  {
  state = {
    levelNames: ["debutant", "confirme", "expert"],
    quizLevel: 0,
    maxQuestions: 10,
    storedQuestions: [],
    question: null,
    options: [],
    idQuestions: 0,
    btnDisabled: true,
    useerAnswer: null,
    score: 0,
    quizEnd : false
  }

  storedDataRef = React.createRef();

  loadQuestions = quizz =>{
     const fetchedArrayQuiz = QuizMarvel[0].quizz[quizz];
     
     if(fetchedArrayQuiz.length >= this.state.maxQuestions){

      this.storedDataRef.current = fetchedArrayQuiz;

     const newArray =  fetchedArrayQuiz.map(({answer, ...keepRest})=> keepRest);

     this.setState({
      storedQuestions: newArray
     })
     }else{
      console.log("pas assez de question");
     }
  }

  showWelcomeMsg = pseudo =>{
    if(!this.state.showWelcomeMsg){

      this.setState({
        showWelcomeMsg: true
      })

      toast.warn(`Bienvenue ${pseudo} et bonne chance!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        bodyClassName: "toastify-color-welcome"

        });
    }
  }

  componentDidMount() { 
    this.loadQuestions(this.state.levelNames[this.state.quizLevel]);
   }

   componentDidUpdate(prevProps, prevState){
    if(this.state.storedQuestions !== prevState.storedQuestions){
      this.setState({
        question : this.state.storedQuestions[this.state.idQuestions].question,
        options: this.state.storedQuestions[this.state.idQuestions].options
      })
    }

    if(this.state.idQuestions !== prevState.idQuestions){
      this.setState({
        question : this.state.storedQuestions[this.state.idQuestions].question,
        options: this.state.storedQuestions[this.state.idQuestions].options,
        useerAnswer: null,
        btnDisabled: true
      })
    }

    if(this.props.userData.pseudo){
      this.showWelcomeMsg(this.props.userData.pseudo)
    }
   }

   submitAnswer = selectedAnswer =>{
    this.setState({
      useerAnswer: selectedAnswer,
      btnDisabled: false
    })
   }

   gaameOver = () =>{
      this.setState({
        quizEnd : true
      })
   }

   nextQuestion = ()=>{
    if(this.state.idQuestions === this.state.maxQuestions - 1){
      this.gaameOver();
    }else{
      this.setState(prevState => ({
        idQuestions: prevState.idQuestions + 1
      }));
    }

    const goodAnswer = this.storedDataRef.current[this.state.idQuestions].answer;
    if(this.state.useerAnswer === goodAnswer){
      this.setState(prevState=>({
        score: prevState.score + 1
      }))

      toast.success(`Bravo +1`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        bodyClassName: "toastify-color"
        });
    }else{
      toast.error(`Raté 0`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        bodyClassName: "toastify-color"
        });
    }
   }

  render(){

  const {pseudo} = this.props.userData 
  
  const displayOptions = this.state.options.map((option, index)=>{
    return(
      <p key={index} 
        className= {`answerOptions ${this.state.useerAnswer ===  option ? "selected" : null} `}
        onClick={()=> this.submitAnswer(option)}
      >
        {option}
      </p>
    )
  })

    return !this.state.quizEnd ? (
      <QuizOver
        ref={this.storedDataRef}
      />
    ):
    (
      <div>
      <Levels/> 
      <ProgressBar
        idQuestions={this.state.idQuestions}
        maxQuestions={this.state.maxQuestions}
      />
      <h2>{this.state.question}</h2>
        {displayOptions}
        <button 
        disabled={this.state.btnDisabled} 
        className='btnSubmit'
        onClick={this.nextQuestion}
        >
          {this.state.idQuestions < this.state.maxQuestions - 1 ? 'suivant' : 'Terminer'}
        </button>
    </div>
    )

}
}


export default Quiz