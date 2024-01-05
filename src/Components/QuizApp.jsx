import React, { useState } from 'react';
import qizeElements from './ListElements';
import Result from './Result';

function QuizApp() {
  const [index, setIndex] = useState(0);
  const [selection, setSelection] = useState('');
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(1);
  const [color, setColor] =useState(false)
  const [textColor , setTextColor] = useState(false)

  let handleColor = ()=> {
    setColor(!color)

  }
  let handleTextColor = ()=> {
    setTextColor(!textColor)

  }
  console.log(textColor)

  const handleClick = (selectedOption) => {
    setSelection(selectedOption);
    console.log(selectedOption);
    if (selectedOption === qizeElements[index].answer) {
      setScore(score + 1);
      console.log(score);
      localStorage.setItem('score',score)
    }
  
    if (index === 4) {
      setFinished(true);
    } else {
      setIndex(index + 1);
    }
  };
  if (finished) {
    return <Result  />;
  }

  return (
    <div className='body' style={{
      backgroundColor : color ? "#000000" : "#017BFE"}}>
        <div className='lightButton'>
          <button onClick={handleColor}  className='LightDarkButton'>{color ? "Light" :"Dark"  }</button>
        </div>
      <div className='quizBox'>
        <div className='boxed'>
          <div className='NumberOf'>
            <h3>{index + 1} Of 5</h3>
          </div>
          <h1 style={{
      color : textColor ? "#FF0000" : "#000000"}} className='Questions'>
            {index + 1}. {qizeElements[index].question}
          </h1>
          <div className='flex'>
            <button onClick={() => handleClick(qizeElements[index].optionA)}>
              {qizeElements[index].optionA}
            </button>
            <button onClick={() => handleClick(qizeElements[index].optionB)}>
              {qizeElements[index].optionB}
            </button>
            <button onClick={() => handleClick(qizeElements[index].optionC)}>
              {qizeElements[index].optionC}
            </button>
            <button onClick={() => handleClick(qizeElements[index].optionD)}>
              {qizeElements[index].optionD}
            </button>
            
            <div>
            </div>
          </div>
              <div className='highlightBtn'>
                <button onClick={handleTextColor} className='lightbtn'>{textColor ? "Remove Highlight" : "Highlight"}</button>
              </div>
        </div>
      </div>
    </div>
  );
}

export default QuizApp;
