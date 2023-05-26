import React from 'react'
import "./QuizView.css";

const QuizView = ({questions, currentQueston, handleAnswerClick}) => {
  return (
    <>   
      <div className="question">
        <div className="question-number">
          <span>
            Question {currentQueston +1 }/{questions.length} {/* question 1/5*/}
          </span>
        </div>
        <div className="question-text">{questions[currentQueston].question}</div>
      </div>

      <div className="answer">
        {
          questions[currentQueston].answers.map(({text, isCorrect}) =>(
          <button key={text} onClick={() => handleAnswerClick(isCorrect)} >
            {text}
          </button>
          ))}
        

      </div>
    </>
  )
}

export default QuizView

//currentQueston is state, wherever question array index use state 
