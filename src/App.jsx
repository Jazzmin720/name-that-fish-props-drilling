import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import "./Components/styles/final-score.css";
//import {useState} from 'react';

//import {AppContext} from './Context';
//import {AppProvider} from './Context';

function App() {
 
  
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