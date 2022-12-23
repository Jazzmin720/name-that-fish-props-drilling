import React, {useContext,useState} from 'react';
import "./styles/game-board.css";
import { Images } from "../assets/images";
import {AppContext} from '../Context';
import "./styles/score-board.css";


//use this to go to the next fish
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

const incorrectCount = 0;
//let correctCount = 0;
const stopCounter = true;


//MAP THROUGH THE ANSWERS LEFT ARRAY TO SET THE NEXT FISH TO NAME



export const GameBoard = () => {
  //state is currently being pulled from the context.jsx provider and is set to {value}
  const {value} = useContext(AppContext)
  const [state,setState] = useState({value})
  const [count,setCount] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)
  

 
  
  
  const answersLeft = ["trout", "salmon", "shark", "tuna"];
  
  

  
  const nextFishToName = initialFishes[0];
  //to change state in this component, we have to initialize the state to be the same as the value being pulled from context.jsx
  
  
  //handle what happens when you submit the form
   let handleSubmit = (e) => {
    
    e.preventDefault();
    //console.log(initialFishes[0].name)

    let incrementCount = () => {
      setCount(count+1)
    }

    let decrementCount = () => {
      setIncorrectCount(incorrectCount+1)
    }
    
    
    console.log(answersLeft); //remove this when it works
    if(nextFishToName.name == state){
      const removedAnswer = answersLeft.shift();
      
        if(removedAnswer){
          //removes the first choice from the scoreboard which comes from the answersLeft array
          const removeDiv = () => {
            const hideDiv = document.getElementById(removedAnswer)
            hideDiv.style.display = "none";
          }
          removeDiv()
          
        }
        
      console.log(answersLeft.shift()) //remove this when it works
      
      console.log("correct") //remove this when it works
      incrementCount()
      console.log(count)
      
      
    }else{
      const removedAnswer = answersLeft.shift();
        if(removedAnswer){
          const removeDiv = () => {
            const hideDiv = document.getElementById(removedAnswer)
            hideDiv.style.display = "none";
          }
          removeDiv()
        }
      console.log(answersLeft.shift()) //remove this when it works
      
      console.log("incorrect") //remove this when it works

      decrementCount()
      console.log(incorrectCount)
    } 
    

     
     
      
  }
      
  //onSubmit will fire the handleSubmit function in the form tag
 //in the text input, onChange is fired after every key stroke, so the state is being changed to equal every key you hit
 //once you hit submit, whatever you had in the textbox at the time of submission becomes the new state


  return (
    <div className="container">
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice" id= {answer}>
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {count}</div>
      </div>
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
    </div>
    
    
    
  );
};

//COUNT WORKS.NOW MAP TO THE NEXT FISH