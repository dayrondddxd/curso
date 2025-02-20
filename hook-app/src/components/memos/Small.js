import React, {memo} from 'react'

export const Small = memo( ({value}) => {

     console.log("sufrio cambio");
     
     
   return (

    <div>{value}</div>
  )
}
 
)