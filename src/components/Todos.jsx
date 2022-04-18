import React, { useState, useEffect } from "react";
import Todo from "./Todo";
// import './todos.css'


export default function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(data => data.json()
                .then(todos => {
                    console.log(todos)
                    setTodos(todos)
                })
            )


    }, []);


    const deleteTodo = (id) => {

        const filtered = todos.filter(td => td.id !== id)

        setTodos([
            ...filtered
        ])
    }
    return <div>

        {todos.map(todo => {
            return (
                <div className="alltodos">
                    <Todo todo={todo} id={todo.id} deleteTodo={deleteTodo} completed={todo.completed} />
                </div>
            )
        })}
    </div>;
}
