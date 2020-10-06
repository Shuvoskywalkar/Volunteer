import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Registration.css'
const Registration = () => {
    const{ID}=useParams()
    const [loggedin,setloggedin,productFromDatabase]=useContext(UserContext)
    const requiredProgram=productFromDatabase.find(pd=>pd.key==ID)
const {_id,key,name,image}=requiredProgram
    const history=useHistory()


const submitReg=(e)=>{
   
  const registered={
      name:document.getElementById('name').value ,
      Email:document.getElementById('Email').value,
      date:document.getElementById('date').value,
      Description:document.getElementById('Description').value,
       library:document.getElementById('library').value,
      image:image
  }


    fetch('https://evening-ravine-07787.herokuapp.com/RegistedData',{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(registered)
    })
    .then(res=>res.json())
    .then(data=>{if (data) {
        // console.log(data)
        history.push('/Tasks')
    }})
    
    e.preventDefault();
}
    return (
        <div>
             <img src={'https://i.imgur.com/SuVq6gP.png'} alt="" srcset=""/>
           
            <div className="registrationForm p-5">
                  <h4 className="regUpText" style={{textAlign:"left"}}>Register as a Volunteer</h4>
                     <br/>
                     <br/>
                     <form onSubmit={submitReg}>
                         
                  <input type="text" className="regInput " name="name" placeholder="Enter The name" value={loggedin.name} id="name"/>
                  <hr/>
                  <input type="email" className="regInput " name="Email" placeholder="Enter the E-mail" value={loggedin.Email} id="Email" /><hr/>
                  <input type="date" name="date" id="date"  className="regInput" placeholder="Enter The Date"/><hr/>
                  <input type="text" className="regInput " id="Description" name="Description" placeholder="Description" placeholder="Description"/><hr/>
                  <input type="text" placeholder="the program u have enrolled" defaultValue={name} className="regInput  p-2" id="library" name="library"/><hr/>
                  
                  <button type="submit" className="btn btn-primary w-100 my-3 p-3" >Registration</button>
                     </form>
              </div>
              
        </div>
    );
};

export default Registration;