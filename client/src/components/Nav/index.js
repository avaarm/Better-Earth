import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
// import M from "materialize-css";
import "./style.css";
import waves from "./waves.svg"

// anything that is materialize react specific has to be imported

function Nav(props) {
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
        <NavItem href="/login">Login</NavItem>
        <NavItem href="/register">Register</NavItem>
      </Navbar> 
      <div>
        <img className="waves" alt="waves" src={waves} />
      </div>
    </div>
  );
}

export default Nav;
