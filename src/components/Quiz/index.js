import React,{Component} from 'react'
import { QuizMarvel } from '../quizMarvel'
import Levels from '../Levels'
import ProgressBar from '../ProgressBar'

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
    score: 0
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
   }

   submitAnswer = selectedAnswer =>{
    this.setState({
      useerAnswer: selectedAnswer,
      btnDisabled: false
    })
   }

   nextQuestion = ()=>{
    if(this.state.idQuestions === this.state.maxQuestions - 1){
      //end
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
  return (
    <div>
      <Levels/> 
      <ProgressBar/>
      <h2>{this.state.question}</h2>
        {displayOptions}
        <button 
        disabled={this.state.btnDisabled} 
        className='btnSubmit'
        onClick={this.nextQuestion}
        >
          Suivant
        </button>
    </div>
  )
}
}


export default Quiz