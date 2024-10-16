import React, { useState } from 'react'
import PropTypes from 'prop-types'

const PrimeraApp = ({ value = 10 }) => {   

const [ counter, setCounter ] = useState( value )


 const handleAdd = ()=>{
     setCounter(counter + 1)
     // setCounter( (c) => c + 1 ) 
 }

 const handleSubtract = () => {
     setCounter(counter - 1)
 }

const handleReset = () => setCounter(value)


      return ( 
          <>
               <h1> { counter }</h1>
               {/* <button onClick= { (e) => handle(e) } > +1 </button> */}
               {/* <button onClick={handle()}>+1</button> */}
               <button onClick={handleAdd}>+1</button>
               <button onClick={handleReset}>Reset</button>
               <button onClick={handleSubtract}>-1</button>
               <button onClick={ ()=> setCounter(counter - 2) }>-2</button>
          </>
     )
}

PrimeraApp.propTypes = {
     value: PropTypes.number.isRequired
}

export default PrimeraApp;



console.log('hol');

