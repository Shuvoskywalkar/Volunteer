import React from 'react';
import { useState } from 'react';
import './Login.css'
import firebaseConfig from './firebase.config';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";

import { useContext } from 'react';
import {UserContext} from '../../App'
import { privateContext } from '../PrivateRoute/PrivateRoute';
const Login = () => {
    if (firebase.apps==0) {
firebase.initializeApp(firebaseConfig)        
    }
    const[loggedin,setloggedin]=useContext(UserContext)
const [newUser,setNewuser]=useState(false)

    const[User,SetUser]=useState({
        signedIn:false,
        name:"",
        Email:"",
        date:"",
        Description:"",
        library:"", 
        password:"nothing"
    })
    
    const provider = new firebase.auth.GoogleAuthProvider();

const googleSignin=()=>{
    firebase.auth().signInWithPopup(provider)
    .then(res=> {
        const{displayName,email}=res.user
         const newUserInfo={
            signedIn:true,
            name:displayName,
            Email:email
         }
        
         SetUser(newUserInfo)
         setloggedin(newUserInfo)
        console.log(newUserInfo)

          })
                    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    
}        



    return (
        <div>
            <img src={'https://i.imgur.com/SuVq6gP.png'} alt="" srcset=""/>
           
              
            <div className="box">
                   <p className="topText">Login With</p>
                   <button className="google d-flex justify-content-evenly" onClick={googleSignin}>
                       <img className="w-25 h-100 " src={'https://pbs.twimg.com/profile_images/1305883698471018496/_4BfrCaP.jpg'} alt="" srcset=""/>
                       <b className="ml-5 mt-2" >Continue with google</b>
                   </button>
                   <br/>
                   <p>Don’t have an account?<span className="text-primary" > Create an account</span></p>
            </div>

          
        </div>
    );
};

export default Login;