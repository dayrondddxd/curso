import { useState } from "react"


export const useCounter = (initialState = 10) => {
 
     const [counter, setCounter] = useState(initialState)
          
     const increment = ()=>{
          setCounter(counter+1)
     }

     const reset = ( )=>{
          setCounter(initialState )
     }

     const decrement = (factor =  1 )=>{
          setCounter(counter - factor)
     }

     return {
          reset,
          counter,
          increment,
          decrement
     }
}
