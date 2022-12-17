import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import "./Components/styles/final-score.css";
import {useState} from 'react';

function App(props) {
  const [state, setState] = useState([]);
  const changeState = (state) => {
    let state = [...state, state];
    setState(state);
  }
  return (
    <div className="App">
      <header>
        <ScoreBoard />
        <GameBoard />
      </header>
    </div>
  );
}

export default App;