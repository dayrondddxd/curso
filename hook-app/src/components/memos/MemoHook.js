import React, { useMemo, useState } from 'react'
import {useCounter} from'../../hooks/useCounter'
import { procesoPesado } from '../../helpers/procesoPesado';


export const MemoHook = () => {

     const {counter, increment} = useCounter(500);
     const [show, setShow] = useState(true)
   
   

     const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

     return ( 
     <>
     <h1>MEMOHOOK</h1>
     <h1> Counter : <small> {counter} </small> </h1>
     {/* <h1> Counter : <Small value= {counter}/> </h1> */}
     
     <p>{memoProcesoPesado}</p>
     {/* <p>{procesoPesado(counter)} </p> */}
          <button
               className='btn'
               onClick={increment}
          >
          +1
          </button>
 
          <button
               onClick={()=>{
                    setShow(!show)
               }}
          >
               show/hide{JSON.stringify(show)}
          </button>
     </>
   )
 }
  