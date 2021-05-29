import './score.css'

function Card(props) {

  const card = props.card

  function onClickListener() {
    props.onClickListener(card)
  }

  return (
    <div key={card.id} onClick={onClickListener}>
      <img src={card.image} alt={card.name} />
      <p>{card.name}</p>
    </div>
  );
}

export default Card;