import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserConteext'

export const MainApp = () => {
 
  const [user, setUser] = ueState({})
 
  // const user = {
  //   id: 123,
  //   name: 'ddd',
  //   email: 'ddd@email.com'
  // }
  
  return (
    // <div>MainApp</div>
    

    <UserContext.Provider calue = {{
      user,
      setUser,
    }}>
    <AppRouter/>
    </UserContext.Provider>
  )
}
