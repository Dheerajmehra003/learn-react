import React, { useState } from 'react'

function App() {
  const[count , setCount]= useState(0);
 const  handleclick=()=>{
   setCount(count+1);
  }

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={handleclick} >click me</button>
    </div>
  )
}

export default App
