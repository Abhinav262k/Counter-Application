
import { useState } from 'react'
import React from 'react'

function Counterfunction() {

    const [counter,setCounter]=useState(0);  //counter -state  -- to store values
    function incrementCounter(){
      setCounter(counter+1)
    }
    function resetCounter(){
      setCounter(0)
    }
    function decrementCounter(){
      if(counter!=0){
        setCounter(counter-1)
      }
      
    }

  return (
   <div>
      <h4> Counter Application</h4>
        <h1>{counter}</h1>
        <button 
        style={{
          backgroundColor:'green',
          color:'white',
          border:'1px solid green',
          padding:'10px',
          margin:'10px',
          
        }}
        onClick={incrementCounter}> Increment</button>

        <button 
        style={{
          backgroundColor:'white',
          color:'red',
          border:'1px solid green',
          padding:'10px',
          margin:'10px',
        }}
        onClick={resetCounter}> Reset</button>

        <button 
        style={{
          backgroundColor:'red',
          color:'white',
          border:'1px solid green',
          padding:'10px',
          margin:'10px',
        }}
        onClick={decrementCounter}> Decrement</button>

    
    </div>
  )
}

export default Counterfunction