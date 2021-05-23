import Alert from './Alert'
import Board from './Board'

import React, { useState } from 'react';

function App() {

  const [showAlert, setShowAlert] = useState(false);

  function gameOver() {
    setShowAlert(true)
  }

  function alertTimeout() {
    setShowAlert(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>DS3 Boss Memory Game</h1>
      </header>
      <Board gameOver={gameOver} />
      <Alert show={showAlert} timeout={alertTimeout}/>
    </div>
  );
}

export default App;
