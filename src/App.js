import Alert from './Alert'
import Board from './Board'

import React, { useEffect, useState } from 'react';
import Score from './Score';
import './app.css';

function App() {

  const [showAlert, setShowAlert] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function gameOver() {
    setShowAlert(true);
    setCurrentScore(0);
  }

  function alertTimeout() {
    setShowAlert(false);
  }

  const incrementScore = () => {
    const incrementScore = currentScore + 1;
    setCurrentScore(incrementScore);
    if (incrementScore > highScore) {
      setHighScore(incrementScore);
    }
  }

  useEffect(() => {
    document.body.style.margin = 0;
 }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>DS3 Boss Memory Game</h1>
        <Score id="scoreboard" currentScore={currentScore} highScore={highScore} />
      </header>
      <Board gameOver={gameOver} pointIncrement={incrementScore}/>
      <Alert show={showAlert} timeout={alertTimeout} />
    </div>
  );
}

export default App;
