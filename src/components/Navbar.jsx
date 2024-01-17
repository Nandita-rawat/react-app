// import React from 'react'
// import { useState } from 'react';

// import "bootstrap/dist/css/bootstrap.min.css";
// import {Link} from 'react-router-dom';
// // import Signup from './Signup';
// import { useAuth0 } from "@auth0/auth0-react";
// // import './Navbar.css';

// const Navbar = () => {
//   const { user,loginWithRedirect ,loginWithPopup, isAuthenticated } = useAuth0();
//   return (
    
//     <div >
    
//     <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <Link class="navbar-brand" to="#">TEAM 18</Link>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0 " >
//         <li class="nav-item">
//           <Link class="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link" to="/about">About</Link>
//           </li>
//           <li class="nav-item">
//           <Link class="nav-link" to="/workspace">Get started</Link>
//           </li>
      
       
//       </ul>
//       <form class="d-flex gap-2"  role="search">
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button type="button" className="btn btn-primary me-md-2" >Register</button>
//         <button type="button" className="btn btn-primary me-md-2" >Login</button>

//       </form>
//       {/* {isAuthenticated ?
//       (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> 
//       Log Out
//     </button>) :
//       (<button onClick={(e)=>loginWithPopup()}>SignUp</button> ) 
//      } */}

//       </form>
//     </div>
//   </div>
// </nav>
//     </div>
    
//   )
// }

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">TEAM 18</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workspace">Get started</Link>
              </li>
            </ul>
            <form className="d-flex gap-2" role="search">
              <Link to="/signup" className="btn btn-primary me-md-2">Register</Link>
              <Link to="/login" className="btn btn-primary me-md-2">Login</Link>

             
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;