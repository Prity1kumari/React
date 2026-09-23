import { useState } from 'react'

import './App.css'

function App(){

  const [counter,setCounter]=useState(10)

  const addValue=()=>{
    if(counter<=20){
    setCounter(counter+1) }
  }
  const removeValue=()=>{
    if(counter>0){
    setCounter(counter-1)
  }
}

  return(
    <>
    <h1>Hello</h1>
    <h2>Counter value {counter}</h2>

    <button
    onClick={addValue}>Add the value {counter}</button>
    <br></br>

    <button
    onClick={removeValue}>Remove the value {counter}</button>

    
    </>

  )
}

export default App
