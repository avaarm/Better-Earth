import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
import M from "materialize-css";
import "./style.css";
import waves from "./waves.svg"

// anything that is materialize react specific has to be imported

function Nav(props) {
  return (
    <div>
      <Navbar

        alignLinks="right"
        brand={
          <a className="brand-logo " href="#">
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
        <NavItem href="">Home</NavItem>
      <NavItem href="#NewsCard"
          onClick={() => props.handlePageChange("NewsCard")}
          className={props.currentPage === "NewsCard" ? "nav-link active" : "nav-link"}>News</NavItem>
        <NavItem href="#FootprintCard"
          onClick={() => props.handlePageChange("FootprintCard")}
          className={props.currentPage === "FootprintCard" ? "nav-link active" : "nav-link"}>My Footprint</NavItem>
        <NavItem href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}>About Us</NavItem>
        <NavItem href="#Signup"
          onClick={() => props.handlePageChange("Signup")}
          className={props.currentPage === "Signup" ? "nav-link active" : "nav-link"}>Login/Signup</NavItem>
      </Navbar> 
      <div>
      <img src={waves} />
      </div>
      
    </div>
  );
}

export default Nav;
