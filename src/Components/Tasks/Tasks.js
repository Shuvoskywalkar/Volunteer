import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Tasks.css'
const Tasks = () => {
    const cancelHandle=(id)=>{
        // console.log(id)
        fetch(`http://localhost:5000/delete/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            // console.log(result)
       
                setDel(!Del)          
        }          
         )
    }

    const[loggedin]=useContext(UserContext)
    const [event,setEvent]=useState([])
  const[Del,setDel]=useState(false)
  useEffect(()=>{
      fetch("http://localhost:5000/Collection2?Email="+loggedin.Email)
      .then(res=>res.json())
      .then(data=>setEvent(data))
  },[Del])
    // console.log(event)


    return (

        <body>
            <Header/>
     
  

            <div className="row">
            {event.map(pd=>
                <div className="col-md-6 colmd my-5 w-100 d-flex " >
                    <div> <img src={pd.image} alt="ছবিটা থাকার কথা" className='w-50 '/>
   </div>
                  <div className="partial w-50">
   <h3 >{pd.library}</h3>
   <br/>
    <h6>{pd.date}</h6>
    <br/>
    <br/>
    <button className=" btn btn-light text-dark" onClick={()=>cancelHandle(pd._id)}> Cancel</button>
   </div>
                </div>
               )}

            </div>

            
            </body>
       
    );
};

export default Tasks;