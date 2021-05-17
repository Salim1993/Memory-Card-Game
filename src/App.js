import Card from './Card'

function App() {

  function handleCardPressed(id) {

  }

  const lol = {
    id: 0,
    image: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/Nameless_King_Achievement.jpg?v=1518634460119",
    name: "Nameless King"
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>DS3 Boss Memory Game</h1>
        <Card 
          card={lol}
          onClickListener={handleCardPressed}/>
      </header>
    </div>
  );
}

export default App;
