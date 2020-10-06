import React, { createContext, useEffect } from 'react';
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
import Tasks from './Components/Tasks/Tasks';
import Description from './Components/Header/Description';
import Admin from './Components/Admin/Admin';
import NotFound from './Notfound/Notfound';
export  const UserContext=createContext()
function App() {
  const [productFromDatabase,setProductFromDatabase]=useState([])
  useEffect(()=>{
      fetch('https://evening-ravine-07787.herokuapp.com/getproducts')
      .then(res=>res.json())
      .then(data=>setProductFromDatabase(data))
  },[])
 
  const [loggedin,setloggedin]=useState([])
  

  

  return (
    <UserContext.Provider value={[loggedin,setloggedin,productFromDatabase]}>
   <Router>
     <Switch>
       
     <Route path="/login">
     <Login/>
     </Route>
     {/* {console.log(loggedin)} */}
     <PrivateRoute  path="/Registration/:ID">
     <Registration/>
     </PrivateRoute>
     
     <Route  exact path="/">
       <Frontpage ></Frontpage>
     </Route>
     
     <Route   path="/home">
       <Frontpage ></Frontpage>
     </Route>
     </Switch>
     <Route path="/Tasks">
       <Tasks></Tasks>
     </Route>
<Route path="/Description">
  <Description/>
</Route>
<Route path="/Admin">
  <Admin/>
</Route>
   </Router>
    </UserContext.Provider>
  );
}

export default App;
