import React,{useLayoutEffect, useRef,useState} from 'react'
import '../useEffect/effects.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

// https://www.breakingbadapi.com/api/quotes/1


export const Layout = () => {
     const{counter, increment} = useCounter(1)
     // image_size
     // id_v2
     // const {loading,data} = useFetch( `https://api.nekosapi.com/v3/images` )
     // https://meowfacts.herokuapp.com/$(counter)
     const {data} = useFetch( `https://api.nekosapi.com/v3/images/${counter}` )
     // console.log(state);
     
     const image_url = !!data && data[0]
     // const { id_v2 } = (!(!data)) && data[0]
    
     console.log(image_url);
    
     const [boxSize, setBoxSize] = useState({})

     const pTag = useRef()

     useLayoutEffect(() => {
      setBoxSize(pTag.current.getBoundingClientRect());
     }, [])


     return (
          <>
               <div>Layout Efect</div>

                    <div>Loading...</div>          
                    <div>
                         <p
                         ref={pTag}
                         > 
                         HOLA MUNDO</p>

                    <pre>
                         {JSON.stringify(boxSize,null,3)}
                    </pre>

                         {/* <footer> {data}</footer> */}
                         <div>{image_url}</div>
                     </div>

          <button
          onClick={increment}>
               siguiente 
          </button>

          </>  

)


}
  