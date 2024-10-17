import React, { useContext, useReducer, useRef, useState } from 'react'
import { shopContext } from '../Context'

const ChildComponent = ({fromchild}) => {
  // const {message} = useContext(shopContext)
  // const [state, setState] = useState("")

  // const handleChange = (e) => {
  //  setState(e.target.value)
  // }  

  // const dataToParent = () => {
  //   fromchild(document.getElementById('inputvalue').value)
  // }
  // const inputElem = useRef(" ")

  // const handlestyle = () => {
  //   inputElem.current.style.background = "red"
  //   inputElem.current.focus()
  // }

  //------Use Reducer -----------

  const initialState = {
    count: 0,
    inc: 0,
    dec: 3
  }
   const reducer = (state, action) => {
    // if(action.type === 'Increment') {
    //   return state + 1
    // }
    // if(action.type === 'Decrement') {
    //   return state - 1;
    // }
    // if(action.type === 'Reset') {
    //   return state = 0;
    // }
    switch (action.type) {
      case 'Increment':
        return {...state, count: state.count + 2, inc: state.inc + 2}

        case 'Decrement':
        return { ...state, count: state.count - 2,
        }
        
        case 'Reset':
        return  {...state, count:0}

      default:
        return state
    }
   
  }

  const [state, dispatch] = useReducer(reducer, initialState)
   console.log(useReducer())
  return (
    <>
    {/* <div>{message}</div>
    <input type="text" value={state} onChange={handleChange} placeholder='type..' />
    <h1>you type: {state}</h1> */}
    {/* <input type="text"  ref={inputElem} />
    <button onClick={handlestyle}>send</button> */}

    <h1>Practicing use Reducer hook</h1>
    <h2>count: {state.count}</h2>
    <h2>inc: {state.inc}</h2>
    <button onClick={()=>dispatch({ type: 'Increment' })}>Increment</button>
    <button onClick={()=>dispatch({ type: 'Decrement' })}>Decrement</button>
    <button onClick={()=>dispatch({ type: 'Reset' })}>Reset</button>
   


    
    </>
  )
}

export default ChildComponent