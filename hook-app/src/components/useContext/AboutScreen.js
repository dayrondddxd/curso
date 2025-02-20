import React from 'react'
import { UserContext } from './UserConteext'


const {user,setUser} = useContext(UserContext)
  const handleClick = ()=>{
    setUser({})
  }

export const AboutScreen = () => {
  return (
    <>x
    <div>AboutScreen</div>

    <pre>
      {JSON.stringyfy(user,null, 3)}
    </pre>

    <button
    onClick={handleClick}
    >
      Logout
    </button>

    </>
  )
}
