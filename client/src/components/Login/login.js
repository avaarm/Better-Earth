import React from "react";
// import { } from "react-materialize";

function SignUp() {
  return (
<div className="container login-sect flex algin-content-start" >
  <div className="row justify-content-center" >
    <div className="col-md-10 col-md-offset-3" id="login-form" >
      <form className="card col-md-10 login border-0" >
              <h2>Login Form</h2>
        <div className="form-group justify-content-center">
          <br />
          <label for="InputEmail">Email address</label>
          <input type="email" className="form-control" id="email-input" placeholder="Email" />
        </div>
        <div className="form-group">
          <label for="InputPassword">Password</label>
          <input type="password" className="form-control" id="password-input" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-default">Login</button>
        <br />
        <p>Or sign up <a href="/signup">here</a></p>
      </form>
      <br />
      
    </div>
  </div>
</div>
  );
}

export default SignUp;