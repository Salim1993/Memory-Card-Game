import Card from './Card'
import cardList from "./data";

import React, { useState, useEffect } from 'react';

import "./board.css"

function Board(props) {

  const [listOfCards, setListOfCards] = useState([]);
  const [picked, setPicked] = useState([]);
  const [listOfViews, setListOfViews] = useState([]);

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
    props.addScore();
    /*
    const found = picked.includes(card);
    if (!found) {
      props.addScore();
      addCardToPickedList(card, picked);
    } else {
      gameOver();
    }
    
    resetCards();
    */
  }

  function resetCards() {
    const shuffledList = reshuffleCards()
    setListOfCards(shuffledList);
    const newListOfViews = createListOfViews(shuffledList)
    setListOfViews(newListOfViews);
  }

  function test() {
    props.addScore()
  }

  function createListOfViews(listOfCardsToUse) {
    return listOfCardsToUse.map(card => {
      return <Card key={card.id} card={card} onClickListener={handleCardPressed} />
    });
  }

  useEffect(() => {
    const shuffledList = reshuffleCards()
    setListOfCards(shuffledList);
    const newListOfViews = createListOfViews(shuffledList)
    setListOfViews(newListOfViews);
  }, []);

  return (
    <div id="board">
      {listOfViews}
      <button onClick={test}>Increment V2</button>
    </div>
  );
}

export default Board;