import './card.css'

function Card(props) {

  const card = props.card

  const onClickListener = props.onClickListener

    return (
        <div onClick={onClickListener}>
          <img src={card.image} alt={card.name}/>
          <p>{card.name}</p>
        </div>
      );
}

export default Card;