import React from "react";
// import { } from "react-materialize";

function SignUp() {
  return (

<div className="container flex algin-content-start" >
  <div className="row justify-content-center" >
    <div className="col-md-6" >
      <form className="signup">
         <h2>Sign Up Form</h2>
        <div className="form-group">
         <br />
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="email-input" placeholder="Email" />
        </div >
        <div className="form-group" >
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="password-input" placeholder="Password" />
        </div>
        <div style="display: none" id="alert" className="alert alert-danger" role="alert">
          <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
          <span className="sr-only">Error:</span> <span className="msg"></span>
        </div>
        <button type="submit" className="btn btn-default">Sign Up</button>
      </form>
     <br />
      <p>Or log in <a href="/login">here</a></p>
    </div>
  </div>
</div> 
  );
}

export default SignUp;





