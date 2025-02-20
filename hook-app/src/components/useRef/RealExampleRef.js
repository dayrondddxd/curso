import React,{useState} from 'react'
import {MultipleCustomHooks} from '../examples/MultipleCustomHooks'

export const RealExampleRef = () => {

  const [show, setShow] = useState(false)
  return (
    <div>
    <div>RealExampleRef</div>
     <hr/>
    
   { show && <MultipleCustomHooks /> }
    
    <button
      className='btn'
      onClick={()=>{
        setShow( !show )
      }}
    >
      Show/Hide
    </button>
    
    </div>
  )
}
