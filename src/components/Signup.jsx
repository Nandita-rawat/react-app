import React from 'react'
import axios from 'axios'
import { useState } from 'react'





const Signup = () => {

//    const [name,setName]=useState()
//    const [email,setEmail]=useState()
//    const [password,setPassword]=useState()

//    const handleSubmit =(e) =>{
//     e.preventDefault()
//     axios.post('',{name , email, password})
//     .then(result =>console.log(result))
//     .catch(err =>console.log(err))
//    }

//   return (
//     <div>
//       <div class="container col-xl-10 col-xxl-8 px-4 py-5">
//     <div class="row align-items-center g-lg-5 py-5">
//       <div class="col-lg-7 text-center text-lg-start">
//         <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
//         <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
//       </div>
//       <div class="col-md-10 mx-auto col-lg-5">
//         <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
//         <div class="form-floating mb-3">
//             <input type="name" class="form-control" id="floatingName" placeholder="name" onChange={(e) =>setName(e.target.value)}></input>
//             <label for="floatingName">Username</label>
//           </div>
//           <div class="form-floating mb-3">
//             <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) =>setEmail(e.target.value)}></input>
//             <label for="floatingInput">Email address</label>
//           </div>
//           <div class="form-floating mb-3">
//             <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e) =>setPassword(e.target.value)}></input>
//             <label for="floatingPassword">Password</label>
//           </div>
        
//           <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
          
//           <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>
//   )


const { loginWithRedirect } = useAuth0();

return <button class="btn btn-success" onClick={(e)=>loginWithRedirect()}>SignUp</button>;


}

export default Signup;
