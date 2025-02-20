import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'

import { NavBar } from './NavBar'
import { HomeScreen } from './HomeScreen'
import { AboutScreen } from './AboutScreen'
import { LoginScreen } from './LoginScreen'



export const AppRouter = () => {
  return (
     <Router>
     <div>
          <NavBar/>
          <Switch>
               <Router exact path = "/" component= {HomeScreen}/> 
               <Router exact path = "/about" component= {AboutScreen}/>   
               <Router exact path = "/login" component= {LoginScreen}/>   
          </Switch>
          {/* <Route component = {HomeScreen}/> */}
          <Redirect to="/"/>
     </div>
     </Router>
  )
}
