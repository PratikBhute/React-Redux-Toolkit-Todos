import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';


function TodosList() {
    const todos = useSelector(state => state.todos) // Value leni hy to selector use
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <h1>Todos</h1>
            </div>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text} 
                    <button className='rem-btn' onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                </li>

            ))}
        </>
    )
}

export default TodosList
