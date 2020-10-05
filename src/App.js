import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Frontpage from './Components/Frontpage/Frontpage';
import Login from './Components/Login/Login';
import { useState } from 'react';
import Registration from './Components/Registration/Registration';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
export  const UserContext=createContext()
function App() {
 
  const [loggedin,setloggedin]=useState({})
  
  console.log(loggedin)
  //console.log is showing that there is an Object

  return (
    <UserContext.Provider value={[loggedin,setloggedin]}>
   <Router>
     <Switch>
       
     <Route path="/login">
     <Login/>
     </Route>
     {console.log(loggedin)}
     <PrivateRoute  path="/Registration/:ID">
     <Registration/>
     </PrivateRoute>
     
     <Route  exact path="/">
       <Frontpage ></Frontpage>
     </Route>
     </Switch>
   </Router>
    </UserContext.Provider>
  );
}

export default App;
