import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

import Programs from '../programs/Programs';
import Description from './Description';
import './Header.css'
const Header = () => {
  const [loggedin,setloggedin]=useContext(UserContext)
  console.log(loggedin)
    return (
        <body>
            
       
        
<nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar" href="#"><img src={'https://i.imgur.com/SuVq6gP.png'} alt="img not showing" className="w-25" srcset=""/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link mx-3" href="#">Home </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link mx-3" href="#">Destination</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link mx-3" href="#">Events</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link mx-3" href="#">Blog</a>
      </li>
     {loggedin.Email?
     
  <li class="nav-item ">
  <a class="nav-link text-light bg-primary mx-2 headerNav" href="#">{loggedin.name}</a>
</li>  
   :
   <li class="nav-item ">
   <a class="nav-link text-light  mx-2 headerNav" href="#">Register</a>
 </li>
    }
      <li class="nav-item active">
        <a class="nav-link text-light bg-dark mx-2 headerNav" href="#">Admin</a>
      </li>
    </ul>
  
  </div>
</nav>
        
       
        </body>
    );
};

export default Header;