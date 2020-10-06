import React, { useContext } from 'react';
import './Description.css'
import Programs from '../programs/Programs'

import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
const Description = () => {
    // const postatonce=()=>{
    //     fetch('http://localhost:5000/PostedFakedata',{
    //         method:'POST',
    //         headers:{'Content-Type':'application/json'},
    //         body:JSON.stringify(Fakedata)
    //     }
    //     )
    // }
    const [productFromDatabase,setProductFromDatabase]=useState([])
    useEffect(()=>{
        fetch('https://evening-ravine-07787.herokuapp.com/getproducts')
        .then(res=>res.json())
        .then(data=>setProductFromDatabase(data))
    },[])
//     console.log(productFromDatabase)
//  const[productFromDatabase]=useContext(UserContext)
    return (
        <div>
            <h1>I Grow By Helping People In Need</h1>
         <div className="searchbox w-125">
           <input type="search" name="" id="" className="bg-light " placeholder="search"/>
           <button type="submit" className="searchButton btn-primary"
            // onClick={postatonce}
            >Search</button>
         </div>
         <div className="row">
             { productFromDatabase.map(pd=><Programs pd={pd}></Programs>)}
         </div>
         {/* <h2>here would be the program section</h2>  */}
</div>
    );
};

export default Description;