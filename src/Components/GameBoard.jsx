import React,{useContext,useEffect,useState} from 'react';
import "./styles/game-board.css";
import { Images } from "../assets/images";
import {AppContext} from '../Context';
//import {ContextProvider} from '../Context';


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
  const [state,setState] = useState("old state")
 
 //state us currently being pulled from App.jsx provider
  const useTheState = useContext(AppContext);
  
 
  //handle what happens when you submit the form
   let handleSubmit = (e) => {
    e.preventDefault();
    console.log({state})
    
  }

  //change the state with each keypress
  let changeTheState = (e)  => {
    e.preventDefault();
    setState(e.target.value)
    console.log(state)
  }

  
   
  
    
 //onSubmit will fire the handleSubmit function in the form tag
 //in the text input, onChange is fired after every key stroke, so the state is being changed to equal every key you hit
 //once you hit submit, whatever you had in the textbox at the time of submission becomes the new state


  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit} >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" onChange = {changeTheState} />
        {console.log(state)}
        <input type="submit"   />
       
      </form>
    </div>
  );
};

