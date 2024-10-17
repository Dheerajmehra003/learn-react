import React, { useContext, useState } from 'react'
import { shopContext } from '../Context'

const ChildComponent = ({fromchild}) => {
  // const {message} = useContext(shopContext)
  // const [state, setState] = useState("")

  // const handleChange = (e) => {
  //  setState(e.target.value)
  // }  

  const dataToParent = () => {
    fromchild(document.getElementById('inputvalue').value)
  }
  return (
    <>
    {/* <div>{message}</div>
    <input type="text" value={state} onChange={handleChange} placeholder='type..' />
    <h1>you type: {state}</h1> */}
    <input type="text" id='inputvalue' />
    <button onClick={dataToParent}>send</button>
    
    </>
  )
}

export default ChildComponent