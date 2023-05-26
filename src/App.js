
import {useState} from 'react';
import "./App.css";
import QuizView from "./components/QuizView";
import ScoreView from "./components/ScoreView";

function App() {
  const questions = [
    {
      question: "Total number of oceans in the World is",
      answers: [
        { text: "7" }, 
        { text: "6" }, 
        { text: "5", isCorrect: true }
      ],
    },
    {
      question: "Who is CEO of Tesla?",
      answers: [
        { text: "Jeff Bezos" },
        { text: "Elon Musk", isCorrect: true },
        { text: "Bill Gates" },
        { text: "Tony Stark" },
      ],
    },
    {
      question: "Where is Statue of Liberty is located?",
      answers: [
        { text: "India" },
        { text: "Russia" },
        { text: "UK" },
        { text: "USA", isCorrect: true },
      ],
    },
    {
      question: "What is the capital of Germany?",
      answers: [
        { text: "Paris" },
        { text: "Berlin", isCorrect: true },
        { text: "London" },
        { text: "Dublin" },
      ],
    },
    {
      question: "Which one is the largest tropical rain forest in the world?",
      answers: [
        { text: "Amazon", isCorrect: true },
        { text: "Bosawas" },
        { text: "Southeast Asian Rain Forest" },
        { text: "Daintree Rain Forest" },
      ],
    },
  ];

const [currentQueston, setcurrentQueston] = useState(0);
const [isQuizOver, setisQuizOver] = useState(false);
const [score, setScore] = useState(0);


// answer click btn
const handleAnswerClick= (isCorrect)=> {
  //check score

  if(isCorrect){
    setScore(score+1);
  }
  // next question and check for quizover 
  const next = currentQueston +1;

  if(next < questions.length){
    setcurrentQueston(next);
  }
  else{
    setisQuizOver(true)
  }

}

// Reset click btn
  const handleResetClick =() =>{
    setScore(0);
    setcurrentQueston(0);
    setisQuizOver(false);
  }
  return (
    <div className='App'>
      {isQuizOver ? (
                    <ScoreView handleResetClick = {handleResetClick} score={score}/>) 
                    : (<QuizView questions={questions} currentQueston={currentQueston} handleAnswerClick={handleAnswerClick}/> )}
 

    </div>
  );
}

export default App;

//app.cs css is applied that is flex x axis center and y axs center and full hight is set so that the whole project what we code it will be in centered

// app.js designing the div part that will be applied for both scoreview and quizview

