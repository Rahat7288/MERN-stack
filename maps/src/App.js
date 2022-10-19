import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState([1,2,3,4,5,6,7,8,9,69])

  const [players, setPlayes] = useState ([
    {name: 'Messi', country: 'Argentina', goals: 7000},
    {name: 'Ronaldo', country: 'Portugal', goals: 5000},
    {name: 'Naymer', country: 'Brazil', goals: 10}
  ])

  const numberList = number.map((number)=>{
    return <h1>{number}</h1>
  })

  const playerList = players.map((player)=>{
    return (
        <div>
          <h1>the name of the player is {player.name}</h1>
          <h2>he is from {player.country}</h2>
          <p>he scores {player.goals} goals</p>
        </div>
    )
  })
  return (
    <div className="App">

      <h1>Reac Map</h1>

      {numberList}
      {playerList}
      
    </div>
  );
}

export default App;
