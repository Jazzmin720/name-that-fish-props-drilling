import React, {useContext,useState} from 'react';
import "./styles/game-board.css";
import { Images } from "../assets/images";
import {AppContext} from '../Context';



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






export const GameBoard = () => {
  //state is currently being pulled from the context.jsx provider and is set to {value}
  const {value} = useContext(AppContext)
  
  const nextFishToName = initialFishes[0];
  //to change state in this component, we have to initialize the state to be the same as the value being pulled from context.jsx
  const [state,setState] = useState({value})
 
  //handle what happens when you submit the form
   let handleSubmit = (e) => {
    e.preventDefault();
    
    if({value}){
      console.log(state)
    }
    
  }

  //change the state with each keypress
  /*let changeTheState = (e)  => {
    e.preventDefault();
    setState(e.target.value)
    console.log(state)
  }*/

  
   
  
    
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
        <input type="text" name="fish-guess" onChange={(e) => setState(e.target.value)}  />
       
        <input type="submit"   />
       
      </form>
      
    </div>
    
    
    
  );
};

