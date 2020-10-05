import React from 'react';
import Header from '../Header/Header';

import './Frontpage.css'
import Description from '../Header/Description';
const Frontpage = (props) => {
    // const{name,Email,signedIn}=props.nam
    // console.log(props.nam)
    return (
        <body className="p-3" >
            <Header/>
         <Description/>
           
           
        </body>
    );
};

export default Frontpage;