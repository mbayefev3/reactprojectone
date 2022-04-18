import React from 'react'
// import './todos.css'
import Delete from './Delete.js'
export default function Todo({ todo, id, deleteTodo }) {

  console.log(id)
  return (
    <div>

      <h1>{todo.title}</h1> <span><Delete deleteTodo={deleteTodo} /></span>
    </div>
  )
}
