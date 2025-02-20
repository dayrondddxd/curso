import React from 'react'

export const TodoListItem = ({todo, index, handleDelete,handleToggle}) => {
  return (

     <li 
     key={ todo.id }
     className='list'
> 

     <p
          className={`${ todo.done && 'complete'}`}
          onClick={()=>handleToggle(todo.id)}
     >
          { index + 1 }. { todo.desc } 
     </p>
     <button
          onClick={ () => handleDelete( todo.id ) }
     >
          borrar
     </button>
</li>
  )
}
