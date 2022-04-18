import React ,{useState} from 'react'

export default function Addtodo({AddTodos}) {

   const [title ,setTitle ]=useState('')

    const handlesubmit =(e)=>{

        e.preventDefault()
        AddTodos(title)
        setTitle("")

    }
  return (
    <div>

        <h1>Ajouter un Todos </h1>
        <form  onSubmit={handlesubmit}>

        <input  value={title} type="text"  onChange={(e)=>{
            setTitle(e.target.value)
        }} />
        <button>AJOUTER </button>
        </form>
    </div>
  )
}
