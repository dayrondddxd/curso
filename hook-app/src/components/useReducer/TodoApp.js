import React, { useEffect, useReducer } from 'react' 
import { todoReducer } from './todoReducer'
// import {useForm} from '../../hooks/useForm'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
// import {Todo} from './Todo'

     const init = () => {

          return JSON.parse(localStorage.getItem('todos')) || []
     }
          // return [{
          // // id: new Date().getTime(),
          // // desc:'Aprender React',
          // // done: false
          // // }]
   


export const TodoApp = () => {
    
     const [todos,dispatch] = useReducer(todoReducer, [], init)

  

     useEffect(() => {
       localStorage.setItem('todo', JSON.stringify(todos))
     }, [todos])
     
     const handleDelete = ( todoId ) => {
          // console.log(todoId);
          const action ={
               type:'delete',
               payload: todoId
          }
          dispatch(action)
     }

     const handleToggle = (todoId) =>{
          dispatch({
               type:'toggle',
               payload:todoId
          })
     }

     const handleAddTodo = (newTodo)=>{
          dispatch({
               type:'add',
               payload:newTodo
          })
          
     }


     // const handleSubmit = (e)=>{ 
     //      e.preventDefault();
     //      if (description.trim().length <= 1) {
     //           return;
     //      }
       



return (
     
     <div> 

     <div>TodoApp ({todos.length}) </div>
     <hr/>

     <div>
          <TodoList
          todos = {todos}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          />
     </div>

     <div>
          <TodoAdd
          handleAddTodo={handleAddTodo}
          />
     </div>

     </div>
     
)    
}