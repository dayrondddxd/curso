import React from 'react'
import { useForm } from '../../hooks/useForm'


export const TodoAdd = ({handleAddTodo}) => {

     const [ {description}, handleInputChange, reset ] = useForm ({
          descrption: '' 
     })      

     const handleSubmit = (e) =>{
          e.preventDefault()
     //      if (description.trim().length <= 1) {
     //           return;
     // }

               const newTodo = {
                    id: new Date().getTime(),
                    desc:description,
                    done: false 
                    // const action ={
                    }
     
                    //      payload: newTodo
               //      type: 'add',
               
               // }
               // dispatch(action);
               handleAddTodo(newTodo);
               reset()
          }


  return (
     <>
     <h4>Agregar Todo</h4>
     <hr/>
     <form onSubmit={handleSubmit}>
          <input
          type='text'
          name='description'
          placeholder='Aprender ...'
          autoComplete='off'
          value={description}
          onChange={handleInputChange}
          />
          <button
          
          >
               Agregar
          </button>
     
     </form>
     </>
  )
}
