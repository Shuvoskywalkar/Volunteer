import React from 'react';
import { Link } from 'react-router-dom';
import  './Programs.css';

const Programs = (props) => {
    const{image,key,name}=props.pd
    
    return (
             
               <div className="col-md-3 my-5 " >
                    
                   <div className="imagebox" >
                   <Link to={"/Registration/"+key}>
                   <img src={image} alt="" srcset="" className="img-fluid p-2" style={{height:'300px'}}/>
                   </Link>
                    <h5 className="mb-5">{name}</h5>
  
                   </div>
              
                               </div>
           
        
    );
};

export default Programs;