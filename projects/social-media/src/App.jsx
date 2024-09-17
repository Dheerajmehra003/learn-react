import React, { useEffect, useRef, useState,useMemo, useCallback } from 'react'
import Header from '../components/Header'

function App() {
//   const[count , setCount]= useState(0);
//  const  handleclick=()=>{
//    setCount(count+1);
//   }
// const [car,setCar]=useState({
//   model:"ferrari",
//   year:"2020",
//   brand:"suv"
// })
//  const handleclick=()=>{
//   setCar((prev)=>{
//     return{...prev,year:"2019"}
//   })
//  }
// const[count,setCount]=useState(0)
// const handleclick=()=>{
// setCount(prev=>prev+1)
// setCount(prev=>prev+1)
// setCount(prev=>prev+1)
// setCount(prev=>prev+1)
// const [count,setCount]=useState(0)
// const [name,setName]=useState("Dheeraj")
// useEffect(()=>{
//   setTimeout(()=>{
//     setCount(count=>count+1)
//   },2000)
// },[count,name])
// const inputelement=useRef();
// const handleclick=()=>{
//   inputelement.current.style.background='blue'
// const [number,setNumber]=useState(0)
// const [counter,setCounter]=useState(0)
// function cubenum(num) {
//   console.log("calculation done")
//   return Math.pow(num,3)
// }
//  const result= useMemo(()=>cubenum(number),[number])

// const [counter,setCounter]=useState(0)
 
// const newfn=()=>{}
  // const newfn=useCallback(()=>{},[])

  const value=20;

  return (
    <div>
      {/* <h1>count:{count}</h1>
      <button onClick={handleclick} >click me</button> */}
    {/* <h1>I have a {car.model}</h1>
    <p>It is from {car.year} and a {car.brand} </p>
    <button onClick={handleclick}>click me</button> */}
    {/* <h1>count:{count}</h1>
    <button onClick={handleclick}>increase</button> */}
     {/* <h1>count:{count} </h1> */}
     {/* <input type="text" ref={inputelement}/>
     <button onClick={handleclick}>click me</button> */}
     {/* <input type="text" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
     <h1>cube of the number is : {result}</h1>
     <button onClick={()=>setCounter(counter+1)}>Counter</button>
     <h1>counter:{counter}</h1> */}
{/*       
      <Header newfn={newfn}/>
     <h1>counter:{counter} </h1>
    <button onClick={()=>{setCounter(counter+1)}} >click me</button> */}
    
    <h1>{value}</h1>
    <button>Increment</button>
    <button>Decrement</button>
    </div>
  )
}

export default App
