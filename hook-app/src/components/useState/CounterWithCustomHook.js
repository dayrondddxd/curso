import React from 'react'
import './Counter.css'
import { useCounter } from '../../hooks/useCounter'


export const CounterWithCustomHook = () => {

     const {state, increment, reset, decrement} = useCounter(10)

     return (
          <>
          <div>Counter With Hook {state}</div>
          <h r/>

          <button onClick={ ()=> increment()}> +1 </button>
          <button onClick={ reset}> reset </button>
          <button onClick={()=> decrement()}> -1 </button>

    </>
  )
}
