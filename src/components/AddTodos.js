import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'


function AddTodos() {
const [input, setInput] = useState('')
const dispatch = useDispatch()

const addToDoHandler = (e) => {
     e.preventDefault()
     dispatch(addTodo( input))  //VALUE Bhejni hy to dispatch used kre
     setInput('')
}

  return (
    <div className='todos'>
       <form onSubmit={addToDoHandler} >
        <input type='text' placeholder='Enter the todos..'
         value={input} 
         onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>Save Todo</button>
       </form>
      
    </div>
  )
}

export default AddTodos
