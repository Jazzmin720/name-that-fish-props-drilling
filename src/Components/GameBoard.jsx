import React, {useState,useEffect} from 'react';
import "./styles/game-board.css";
import { Images } from "../assets/images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];



export const GameBoard = (props) => {
  const nextFishToName = initialFishes[0];
 
  
  //set the state here
  const [state, setState] = useState([]);
  //handle what happens when you submit the form
   let handleChange = (e) => {
    e.preventDefault();
    console.log(state)
  }
  
  
    
 //onSubmit will fire the handleChange function in the form tag
 //in the text input, onChange is fired after every key stroke, so the state is being changed to equal every key you hit
 //once you hit submit, whatever you had in the textbox at the time of submission becomes the new state


  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={e => {handleChange(e)}} >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" value={state}  onChange={(e) => setState(e.target.value)} />
        <input type="submit"   />
        {console.log(state)}
      </form>
    </div>
  );
};

