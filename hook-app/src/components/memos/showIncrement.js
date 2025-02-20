import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
     console.log("me volvi a generar");
     
  return (
     <>
    <div>ShowIncrement</div>

    <button
    onClick={()=>{
     increment(5)

    }}

    >
     Increment
    </button>    
     </>
  )
}
)