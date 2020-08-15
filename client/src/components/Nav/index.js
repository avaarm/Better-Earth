import React, { useState, useEffect } from "react";
import { Navbar, Icon, NavItem, Col } from "react-materialize";
import "./style.css";
import waves from "./waves.svg";

// anything that is materialize react specific has to be imported

function Nav(props) {
  // Trying to set state with loggedIn or not soas to hide "register" and "login" or display the user's name and "logout"
  ////////////////////////////////////////////
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const sessionName = sessionStorage.getItem("Name");

  useEffect(() => {
    setName(sessionName);
    // console.log("name: " + name)
    // console.log("loggedIn: " + loggedIn)
    if (name) {
      setLoggedIn(true);
    }
  }, [sessionName]);
  ///////////////////////////////////////////////
  return (
    <div>
      <Navbar
        alignLinks="right"
        brand={
          <a className="brand-logo " href="/">
            Better Earth
          </a>
        }
        centerChildren
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "right",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <NavItem href="/">Home</NavItem>
        <NavItem href="/footprintCard">MyFootprint</NavItem>
        <NavItem href="/news">News</NavItem>
        <NavItem href="/about">About</NavItem>
        {loggedIn ? (
          <NavItem href="/login">Logout</NavItem>
        ) : (
          <NavItem href="/login">Login</NavItem>
        )}
        {loggedIn ? (
          <NavItem>{name}</NavItem>
        ) : (
          <NavItem href="/register">Register</NavItem>
        )}
      </Navbar>
      <div>
        <img className="waves" alt="waves" src={waves} />
      </div>
    </div>
  );
}

export default Nav;
