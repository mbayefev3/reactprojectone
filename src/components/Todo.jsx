import React from 'react'
// import './todos.css'
import Delete from './Delete.js'
export default function Todo({ todo, id, deleteTodo, completed }) {

  // console.log(completed)
  return (
    <div>

      <h1>{todo.title}</h1> <span><Delete deleteTodo={deleteTodo} id={id} />
        <input type='checkbox' checked={completed} />
      </span>
    </div>
  )
}
