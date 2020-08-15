import React, { useEffect } from "react";
import axios from "axios";
import {  Route, Redirect } from "react-router-dom";

function Logout() {
  useEffect(() => {
    sessionStorage.removeItem("Name");
    sessionStorage.removeItem("Id");
    logout()

  }, []);

  function logout(){
    axios.post("/api/logout")
      .then((res) => {

        if(res.status === 200){
          console.log("logged out");
          }
       })
  }

  return (
    <Route>
     <Redirect to={{pathname: "/"}} />
   </Route>
  )
}

export default Logout;