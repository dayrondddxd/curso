// import React from 'react'

// const PrimeraApp = () => {
//      return <h1>Hola Mundo</h1>
// }
// export default PrimeraApp;


// // RETORNAR ELEMENTOS EN EL COMPONENTE
// import React, { Fragment } from 'react'

// const PrimeraApp = () => {
//      const saludo ={
//           nombre: 'Fernando',
//           edad: 54,
//      }
//      return (
//           <Fragment>
//                <h1> { JSON.stringify( saludo, null, 3 ) }</h1>
//           <h1>Hola Mundo</h1>
//           <h1>Mi primera aplicacion</h1>
//           </Fragment>
//      )
//      }
// export default PrimeraApp;

// PROPTYPES
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const PrimeraApp = ({ saludo, subtitulo }) => {
    
     
     return (
          <>
               <h1> { saludo }</h1>
          </>
     )
}

PrimeraApp.propTypes = {
     saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
     subtitulo:'subtitulo'
}

export default PrimeraApp;
