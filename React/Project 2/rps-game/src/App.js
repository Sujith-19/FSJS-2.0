import React,{useEffect, useState} from 'react';

import './App.css';

function App() {

  const [userChoice,setUserChoice]=useState('Select choice')
  const [computerChoice,setComputerChoice]= useState('')
  const [result,setResult]= useState("")
  const choices =['rock','paper','scissor']


  const handleclick=(value)=>{
    setUserChoice(value)
    generateComputerChoice()
    
  }

  const generateComputerChoice=()=>{
    const randomNumber =Math.floor(Math.random()*choices.length)
    const randomChoice = choices[randomNumber]
    setComputerChoice(randomChoice)
    
  }

  useEffect(()=>{
    {
      switch(userChoice + computerChoice){
        case 'scissorpaper':
        case 'rockscissor':
        case 'paperrock':
          setResult('YOU WIN')
          break
        case 'paperscissor':
        case 'scissorrock':
        case 'rockpaper':
         setResult('YOU LOSE')
         break
        case 'paperpaper':
        case 'scissorscissor':
        case 'rockrock':
         setResult('DRAW')
         break
        default:
      }
    }
  }, [userChoice,computerChoice])

  


  return (
    <div className="App">
      <h1>User choice is:{userChoice}</h1>
      <h1>Computer choice is:{computerChoice}</h1>
      {choices.map((choice,index)=>
      <button key={index} onClick={() =>handleclick(choice)}>{choice}</button>
      )}
      {/* <button onClick={()=>handleclick('Rock')}>Rock</button>
      <button onClick={()=>handleclick('Paper')}>Paper</button>      
      <button onClick={()=>handleclick('Scissor')}>Scissor</button> */}
      <h1>{result}</h1>
    </div>
  );
}

export default App;
