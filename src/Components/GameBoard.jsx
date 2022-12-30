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







export const GameBoard = () => {
  //state is currently being pulled from the context.jsx provider and is set to {value}
  const {value} = useContext(AppContext)
  
  //to change state in this component, we have to initialize the state to be the same as the value being pulled from context.jsx
  const [state,setState] = useState({value})
  const [count,setCount] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)
  const [fish,setFish] = useState(initialFishes[0]) //set fish to change the picture
  
  const answersLeft = ["trout", "salmon", "shark", "tuna"];
  
  const [removed,setRemoved] = useState("")
  const nextFishToName = initialFishes[0];
  
  
  
  //handle what happens when you submit the form
   let handleSubmit = (e) => {
    
    e.preventDefault();
    //console.log(initialFishes[0].name)

    let incrementCount = () => {
      setCount(count+1)
    }

    let incorrectIncrementCount = () => {
      setIncorrectCount(incorrectCount+1)
    }
    
    
    console.log("state is"+ " " + state)// remove when this works
    
   
    
    const removeDiv = () => {
      const hideDiv = document.getElementById(removed)
      hideDiv.style.display = "none";
    }
    
    const removeTroutDiv = () => {
      const hideDiv = document.getElementById("trout")
      hideDiv.style.display = "none";
    }
    const removeSalmonDiv = () => {
      const hideDiv = document.getElementById("salmon")
      hideDiv.style.display = "none";
    }
    const removeTunaDiv = () => {
      const hideDiv = document.getElementById("tuna")
      hideDiv.style.display = "none";
      //console.log("answer removed:" + " "+ removed)
    }
    const removeSharkDiv = () => {
      const hideDiv = document.getElementById("shark")
      hideDiv.style.display = "none";
      //console.log("answer removed:" + " "+ removed)
    }


    //update the score
    
    //if the removed index is equal to the states
    
    
    
    if("trout" == state){
        setRemoved("trout") //div that we want removed   //WHILE LOOP FOR THIS?
        incrementCount();
        removeTroutDiv();
        
      }else if("salmon" == state && removed == "trout"){
        setRemoved("salmon") //div that we want removed
        incrementCount();
        removeTroutDiv();
        removeSalmonDiv();
        
      }else if ("shark" == state && removed == "salmon"){
        setRemoved("shark") //div that we want removed
        incrementCount();
        removeTroutDiv();
        removeSalmonDiv();
        removeSharkDiv();
      }else if("tuna" == state && removed == "shark"){
        setRemoved("tuna") //div that we want removed
        incrementCount();
        removeTroutDiv();
        removeSalmonDiv();
        removeSharkDiv();
        removeTunaDiv();
      }else if(removed !== state && !removed){ //if the removed index is not equal to the state
        setRemoved("trout") //div that we want removed   //WHILE LOOP FOR THIS?
        incorrectIncrementCount();
        removeTroutDiv();
       
      } else if (removed !== state && removed == "trout"){
        setRemoved("salmon") //div that we want removed   //WHILE LOOP FOR THIS?
        incorrectIncrementCount();
        removeTroutDiv();
        removeSalmonDiv();
        
      } else if (removed !== state && removed == "salmon"){
        setRemoved("shark") //div that we want removed   //WHILE LOOP FOR THIS?
        incorrectIncrementCount();
        removeTroutDiv();
        removeSalmonDiv();
        removeSharkDiv();
      }
     
    } 
    
    console.log("removed:" + " " + removed)

    
    //FIGURE OUT HOW TO FIT THE RESPONSES NOT EQUAL TO STATE
    
      
          
     
      
  
      
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
          <img src={fish.url} alt={fish.name} />
        </div>
      
        <form id="fish-guess-form" onSubmit={handleSubmit} >
        
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input type="text" name="fish-guess"  onChange={e=> setState(e.target.value)}  />
        
          <input type="submit"   />
        
        </form>
        
      </div>
    </div>
    
    
    
  );
};

//COUNT WORKS.NOW MAP TO THE NEXT FISH


//HOW TO CHANGE STATE OF NEXT FISH TO NAME?????