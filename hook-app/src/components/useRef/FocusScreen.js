import React,{useRef} from 'react'
import '../useEffect/effects.css'


export const FocusScreen = () => {
     
     const inputRef = useRef()

     const handleClick=()=>{
          // document.querySelector('input').focus()
          inputRef.current.select()
     }

  return (
     <div>
    <div>FocusScreen</div>

     <input
     ref={inputRef}
     className='form'
     placeholder='Su nombre'
     />
     
     <button
     className='btn'
     onClick={handleClick}
     >
          Focus
     </button>

     </div>

  )
}
  