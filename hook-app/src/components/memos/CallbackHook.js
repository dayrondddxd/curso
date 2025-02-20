import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './showIncrement'

export const CallbackHook = () => {
     
     const [counter, setCounter] = useState(10)

     // const increment = ()=>{
     //      setCounter(counter + 1 )
     // }

     const increment = useCallback(
       (num) => {
         setCounter( c => c + num )
       },
       [setCounter],  
     )
     

  return (
     <>
    <div>CallbackHook  { counter} </div>

    <ShowIncrement increment= {increment}/>
     </>
)
}
