import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Registration.css'
const Registration = () => {
    const{ID}=useParams()
    const [productFromDatabase,setProductFromDatabase]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/getproducts')
        .then(res=>res.json())
        .then(data=>setProductFromDatabase(data))
    },[])
    const requiredProgram=productFromDatabase.find(pd=>pd.key==ID)
  
    console.log(requiredProgram)
    
    const [loggedin,setloggedin]=useContext(UserContext)
    return (
        <div>
             <img src={'https://i.imgur.com/SuVq6gP.png'} alt="" srcset=""/>
           
            <div className="registrationForm p-5">
                  <h4 className="regUpText" style={{textAlign:"left"}}>Register as a Volunteer</h4>
                     <br/>
                     <br/>
                     <form action=""  >
                         
                  <input type="text" className="regInput " name="name" placeholder="Enter The name" value={loggedin.name}/>
                  <hr/>
                  <input type="email" className="regInput " name="Email" placeholder="Enter the E-mail" value={loggedin.Email} /><hr/>
                  <input type="date" name="date" id=""  className="regInput" placeholder="Enter The Date"/><hr/>
                  <input type="text" className="regInput " name="Description" placeholder="Description" placeholder="Description"/><hr/>
                  <input type="text" placeholder="the program u have enrolled" className="regInput  p-2" name="library"/><hr/>
                  
                  <button type="submit" className="btn btn-primary w-100 my-3 p-3" >Registration</button>
                     </form>
              </div>
              
        </div>
    );
};

export default Registration;