import React, { useEffect, useRef, useState,useMemo, useCallback } from 'react'
import Header from '../components/Header'
import ChildComponent from './components/childComponent'

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

  // const value=20;

  // const [state, setState] = useState(false)

  // const handleClick = () => {
  // setState(!state)
  // }

  // const message = "hello this is from child"

  const [count, setCount] = useState(0)
  const [inputValue, setInputValue]= useState("")
  const [isVisible, setIsVisible] = useState(false);
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([])
  
  const arr = ['mango', 'apple', 'banana', 'cherry']

   const handleSubmit = (e) => {
    e.preventDefault()
         console.log(inputValue)
  }
  
   const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo])
      setNewTodo('')
    }
   }

   const removeTodo = (index) => {
    setTodos(todos.filter((_, i)=>i !== index))
   }
 

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
    
    {/* <h1>{value}</h1> */}
    {/* <button>Increment</button> */}
    {/* <button>Decrement</button> */}

     
    {/* <button onClick={handleClick}>click me</button>
     {state===true ?
      <p>hello world</p>
    : <div></div>}

    <ChildComponent message={message}/>
     
    {state===true ?
      <p>user is logged in</p>
    : <p>user is logged out</p>} */}
      
      {/* <form>
        <input type='text' value='name'/>
        <button onClick={handlesubmit}>submit</button>
      </form> */}

      <p>count:{count}</p>
      <button onClick={(prev)=>setCount(count+1)}>increment</button>
      <button onClick={(prev)=>setCount(count-1)}>decrement</button>
      
      <ul>
        {arr.map((item, index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <button type='submit'>submit</button>
      </form>

      <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && <p>Hello, World!</p>}
    </div>

     <div>
      <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
      <button onClick={addTodo}>add</button>
      <ul>
        {todos.map((item, index)=>(
          <li key={index}>
            {item}
            <button onClick={()=>removeTodo(index)}>delete</button>
            </li>
        ))}
      </ul>
     </div>
    </div>
    
  )
}

export default App
