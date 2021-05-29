import Alert from './Alert'
import Board from './Board'

import React, { useEffect, useState } from 'react';
import Score from './Score';

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
    //TODO: read link for issue
    // https://stackoverflow.com/questions/53845595/wrong-react-hooks-behaviour-with-event-listener
    addScore();
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }

  const addScore = () => {
    const incrementScore = currentScore + 1;
    setCurrentScore(incrementScore);
  }

  useEffect(() => {
    // take action when isVisible Changed
    console.log(`updated score ${currentScore}`);
 }, [currentScore])

  return (
    <div className="App">
      <header className="App-header">
        <h1>DS3 Boss Memory Game</h1>
        <Score currentScore={currentScore} highScore={highScore} />
      </header>
      <Board gameOver={gameOver} pointIncrement={incrementScore} addScore={addScore}/>
      <Alert show={showAlert} timeout={alertTimeout} />
      <button onClick={addScore}>Increment</button>
    </div>
  );
}

export default App;
