import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Nav from "../components/Nav";
import FootprintCard from "../components/FootprintCard";

function RegisterLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };
    // routing needs to be done here
    axios
      .post("/api/auth/register_login", userData)
      .then((res) => {
          if(res.status === 200){
          console.log("successful login");
          setLoggedIn(true);
          console.log(loggedIn);
          return (
              <Route exact path="./footprintCard">
                <Redirect to={{pathname: "/"}} />
              </Route>
          )
        }
        }
      )
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        setLoggedIn(false);
        console.log(loggedIn);
        alert("Email and/or Password are not correct. Please try again.")
      });
  };

  return (
    <div>


    {loggedIn ? (
      <Route>
       <Redirect to={{pathname: "/"}} />
       </Route>
       ) : (
       <div className="container">
        <div className="row">
          <div className="col s12 center">
            <h3>Begin your Better Earth lifestyle!</h3>
          </div>
        </div>
        <div className="row">
          <form className="col s12" onSubmit={onSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input
                  id="emailLogin"
                  type="email"
                  className="validate"
                  onChange={(e) => {
                    // console.log(email)
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="emailLogin">Email</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">work</i>
                <input
                  id="passwordLogin"
                  type="password"
                  className="validate"
                  onChange={(e) => {
                    // console.log(password)
                    setPassword(e.target.value);
                  }}
                />
                <label htmlFor="passwordLogin">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 center">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Login
                  <i className="material-icons prefix">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
   }
  </div>
  )
    
}

export default RegisterLogin;