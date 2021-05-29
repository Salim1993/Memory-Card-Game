import Card from './Card'
import cardList from "./data";

import React, { useState, useEffect } from 'react';

import "./board.css"

function Board(props) {

  const [listOfCards, setListOfCards] = useState([]);
  const [picked, setPicked] = useState([]);

  function addCardToPickedList(card, currentPickedList) {
    currentPickedList.push(card);
    setPicked(currentPickedList);
  }

  function reshuffleCards() {
    return cardList.map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)
      .splice(0, 5)
  }

  function gameOver() {
    setPicked([]);
    props.gameOver();
  }

  function handleCardPressed(card) {
    const found = picked.includes(card);
    if (!found) {
      props.addScore();
      addCardToPickedList(card, picked);
    } else {
      gameOver();
    }
    
    resetCards();
  }

  function resetCards() {
    const shuffledList = reshuffleCards()
    setListOfCards(shuffledList);
  }

  useEffect(() => {
    const shuffledList = reshuffleCards()
    setListOfCards(shuffledList);
  }, []);

  return (
    <div id="board">
      {
        listOfCards.map(card => {
          return <Card key={card.id} card={card} onClickListener={handleCardPressed} />
        })
      }
    </div>
  );
}

export default Board;