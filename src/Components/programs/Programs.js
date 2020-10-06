import React from 'react';
import { Link } from 'react-router-dom';
import  './Programs.css';

const Programs = (props) => {
    const{image,key,name}=props.pd
    
    return (
             
               <div className="col-md-3 my-5 " >
  <Link to={"/Registration/"+key}>
                   <div className="imagebox" >
                 
                   <img src={image} alt="" srcset="" className="img-fluid p-2" style={{height:'300px'}}/>
                  
                    <h5 className="mb-5 text-light">{name}</h5>
                
                   </div>
                   </Link>
                               </div>
           
        
    );
};

export default Programs;