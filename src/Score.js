import './card.css'

function Score(props) {

  const currentScore = props.currentScore
  const highestScore = props.highScore

  return (
    <div>
      <p>Score: {currentScore}</p>
      <p>High Score: {highestScore}</p>
    </div>
  );
}

export default Score;