import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addnote ,delnote } from './actions'
import './App.css'
import {reducerType} from './reducers'
function App() {
  const notes = useSelector((state : reducerType) => state.notes )
  const dispatch = useDispatch();
  const [input , setInput] = useState<string>("");
  return (
    <div className="App">
      <input type ="text" value ={input} 
        onChange ={
          (e)=>{
            setInput(e.target.value)
        }}/>
      <button onClick ={()=>{
        dispatch(addnote(input))
        setInput("")
      }}>Add</button>
      <div className="notes">
        {notes.length === 0 ? (<h2>Click on Add to note</h2>) : (<ul> {notes.map((note : string, index : number)=>(  
          <li key={index}>
            <h3>{note}</h3><button onClick={()=>{
              dispatch(delnote(index))
            }}>Delete</button>
          </li>
        ))}</ul>)}
       
      </div>
    </div>
  )
}

export default App
