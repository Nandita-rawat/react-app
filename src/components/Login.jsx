import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css"

const Login = () => {
  return (
    <div>
        <div class="bodysign">
    {/* <div className='loginpage'> */}
       <div class="container">
        <div class="col-md-6">
            <div class="card p-4" id="loginForm">
                <h5 class="card-title text-center mb-4">Login</h5>
                <form>
                    <div class="form-group">
                        <input type="email" class="form-control" id="loginEmail" placeholder="Your Email"/>
                    </div>
                    <br/>
                    <div class="form-group">
                        <input type="password" class="form-control" id="loginPassword" placeholder="Password"/>
                    </div>
                    <br/>
                    <div className='center-container'>
                    <button type="submit" class="btn btn-success btn-block">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>

    </div>
  )
}

export default Login
