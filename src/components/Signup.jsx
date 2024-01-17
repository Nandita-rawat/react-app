// import React from 'react'
// import axios from 'axios'
// import { useState } from 'react'





// const Signup = () => {

// //    const [name,setName]=useState()
// //    const [email,setEmail]=useState()
// //    const [password,setPassword]=useState()

// //    const handleSubmit =(e) =>{
// //     e.preventDefault()
// //     axios.post('',{name , email, password})
// //     .then(result =>console.log(result))
// //     .catch(err =>console.log(err))
// //    }

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


// const { loginWithRedirect } = useAuth0();

// return <button class="btn btn-success" onClick={(e)=>loginWithRedirect()}>SignUp</button>;


// }

// export default Signup;


// import React from 'react'
// import "./Signup.css"
// import "bootstrap/dist/css/bootstrap.min.css";

// const Signup = () => {
//   return (
    
//       <div>
//         <div class="bodysign">
//         <div class="container">
//         <div class="col-md-6">
//             <div class="card p-4">
//                 <h5 class="card-title text-center mb-4">Register Here</h5>
//                 <form>
//                     <div class="form-group">
//                         <input type="text" class="form-control" id="name" placeholder="Your Name"/>
//                     </div>
//                     <br/>
//                     <div class="form-group">
//                         <input type="email" class="form-control" id="email" placeholder="Your Email"/>
//                     </div>
//                     <br/>
//                     <div class="form-group">
//                         <input type="password" class="form-control" id="password" placeholder="Password"/>
//                     </div>
//                     <br/>
//                     <div className='center-container'>
//                     <button type="submit" class="btn btn-success btn-block">Signup</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
//     </div>
//     </div>
    
//   )
// }

// export default Signup
import React, { useState } from 'react';
import axios from 'axios';
import "./Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request with the form data
      const response = await axios.post('YOUR_API_ENDPOINT', formData);

      // Handle the response as needed (e.g., redirect, show a success message)
      console.log(response.data);
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Error during signup:', error);
    }
  };

  return (
    <div>
      <div className="bodysign">
        <div className="container">
          <div className="col-md-6">
            <div className="card p-4">
              <h5 className="card-title text-center mb-4">Register Here</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <br />
                <div className='center-container'>
                  <button type="submit" className="btn btn-success btn-block">Signup</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
