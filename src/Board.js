import Card from './Card'
import cardList from "./data";

import React, { useState, useEffect } from 'react';

import "./board.css"

function Board() {

  const [listOfCards, setListOfCards] = useState([]);
  const [picked, setPicked] = useState([]);
  const [listOfViews, setListOfViews] = useState([]);

  function addCardToPickedList(card, currentPickedList) {
    currentPickedList.push(card);
    setPicked(currentPickedList);
  }

  function reshuffleCards() {
    return cardList.map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)
            .splice(0, 5)
  }

  function gameOver() {
    
  }

  function handleCardPressed(card) {
    const found = picked.includes(card);
      if(!found) {
        addCardToPickedList(found, picked);
        
      } else {
        gameOver();
      }
  }

  function setupData() {
    const temp = listOfCards.map(card => {
      return <Card key={card.id} card={card} onClickListener={handleCardPressed}/>
    });
    setListOfViews(temp);
  }

  useEffect(() => {
    const shuffledList = reshuffleCards()
    setListOfCards(shuffledList);
    setupData()
  }, []);

  return (
    <div id="board">
      {listOfViews}
    </div>
  );
}

export default Board;