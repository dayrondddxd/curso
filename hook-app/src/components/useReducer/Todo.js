import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'

 export const Todo = () => {

     const initialState = [{
          id: new Date().getTime(),
          desc:'Aprender React',
          done: false
          }]

          const [todos] = useReducer(todoReducer, initialState)

  return (
    <div>Todo</div>
  )
}
