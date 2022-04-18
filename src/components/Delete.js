import React from 'react'

const Delete = ({ deleteTodo, id }) => {

    return (
        <div>
            <button onClick={() => {
                deleteTodo(id)
            }}>delete</button>

        </div>
    )
}




export default Delete