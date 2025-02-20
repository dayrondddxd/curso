import React, { useState } from 'react'
import './Counter.css'


export const CouterApp = () => {
  
     const [ state, setState] = useState({
          counter1: 10,
          counter2: 20,
     })

     const {counter1,counter2} = state

     return (
               <>
          <div>Couter1 { counter1 }</div>
          <div>Couter2 { counter2 }</div>
          <hr />

          <button
           className='btn btn primary'
           onClick={()=>{
               setState({ 
                    ...state,
                    counter1:counter1 + 1} )
           }

           }
           >
               +1
          </button>
          </>
          )
}
