import React from 'react'
import '../useEffect/effects.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

// https://www.breakingbadapi.com/api/quotes/1


export const MultipleCustomHooks = () => {
     const{counter, increment} = useCounter(1)
     // image_size
     // id_v2
     // const {loading,data} = useFetch( `https://api.nekosapi.com/v3/images` )
     // https://meowfacts.herokuapp.com/$(counter)
     const {loading,data} = useFetch( `https://api.nekosapi.com/v3/images/${counter}` )
     // console.log(state);
     const  image_url  = !!data && data[0]
     // const { id_v2 } = (!(!data)) && data[0]
     console.log(image_url);

    
    
     return (
          <>
               <div>Custom Hooks</div>
          
               {  
                    loading
                    ?
                         (
                              <div>Loading...</div>
                         )
                    :
                         (
                         
                              <div>
                                   <p> HOLA MUNDO</p>
                                   <footer> {data.id}</footer>
                                   <div>{data.image_url}</div>
                              </div>

                         )
               }

          <button
          onClick={increment}>
               siguiente 
          </button>

          </>  

)


}
  