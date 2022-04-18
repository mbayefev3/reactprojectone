import React, { useState, useEffect } from "react";
import Todo from "./Todo";
// import './todos.css'
import Addtodo from "./Addtodo";

export default function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(data => data.json()
                .then(todos => {
<<<<<<< HEAD
                    console.log(todos)
                    setTodos(todos)
=======
                    var lastdodos=[]
                    for (let index = 0; index < 15; index++) {
                        const element = todos[index];
                        lastdodos.push(element)
                        
                    }
            
                   setTodos(lastdodos)

>>>>>>> master
                })
            )


    }, []);

    useEffect(()=>{
      
    },[])


    const deleteTodo = (id) => {

        const filtered = todos.filter(td => td.id !== id)

        setTodos([
            ...filtered
        ])
    }


    const AddTodos =(title )=>{
        const id =  Math.floor(Math.random() * 100)        ;
        const completed=false ;
        const userId =  Math.floor(Math.random() * 100)  ;

        const newTodos = [...todos, {  title ,
            completed,
            userId,
            userId }];

            setTodos(newTodos)

    }
    return <div>
   <Addtodo   AddTodos={AddTodos}/>

        {todos.map(todo => {
            return (
                <div className="alltodos">
                    <Todo todo={todo} id={todo.id} deleteTodo={deleteTodo} completed={todo.completed} />
                </div>
            )
        })}
    </div>;
}
