import React from 'react'
import {useContext} from './UserConteext'

export const HomeScreen = () => {

  const {user} = useContext(userConteext)

  return (
    <div>HomeScreen</div>
  <pre>
    {JSON.stringify(user, null,3)}
  </pre>
  
  )
}
