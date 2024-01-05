import React, { useState } from 'react';
import QuizApp from './QuizApp';

export default function Result() {
  const [playAgain, setPlayAgain] = useState(false);
  let score = localStorage.getItem('score')
  const [color, setColor] =useState(false)

  let handleColor = ()=> {
    setColor(!color)

  }
  const handlePlayAgain = () => {
    setPlayAgain(true);
  };
  if (playAgain) {
    return <QuizApp />;
  }


  return (
    <div style={{
        backgroundColor : color ? "#000000" : "#017BFE"}} className='ResultBack'>
        <div className='lightButton'>
            <button onClick={handleColor} className='LightDarkButton'>{color ? "Light" :"Dark"  }</button>
        </div>
        <div className='resultBox'>
            <div className='resutText'>
                <h1>RESULT</h1>
            </div>

            <div>
                <h1 className="resultScore">You Scored</h1>
                <h2 className='scoreinPer'>{(score/5)*100}%</h2>
                <h1>Well played</h1>
            </div>

            <div className='Statement'>
                <button onClick={handlePlayAgain} className='playAgain'>Play Again</button>
            </div>
        </div>
    </div>
  );
}
