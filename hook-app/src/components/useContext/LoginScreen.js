import React, { useContext } from 'react'
import { UserContext } from './UserConteext'

const {setUser} = useContext(UserContext)

export const LoginScreen = () => {
  return (
    <>
    <div>LoginScreen</div>

    <button
    onClick={()=> setUser({
      id:123,
      name:Don
    })}
    >
      Login
    </button>
    </>
  )
}
