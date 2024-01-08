import React from 'react'
import { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
// import Signup from './Signup';
import { useAuth0 } from "@auth0/auth0-react";
// import './Navbar.css';

const Navbar = () => {
  const { user,loginWithRedirect ,loginWithPopup, isAuthenticated } = useAuth0();
  return (
    
    <div >
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 " >
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/workspace">Get started</Link>
          </li>
      
       
      </ul>
      <form class="d-flex gap-2"  role="search">
    
      {isAuthenticated ?
      (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> 
      Log Out
    </button>) :
      (<button onClick={(e)=>loginWithPopup()}>SignUp</button> ) 
     }

      </form>
    </div>
  </div>
</nav>
    </div>
    
  )
}

export default Navbar;
