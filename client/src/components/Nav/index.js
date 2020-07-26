import React from "react";
import { Navbar, Icon, NavItem} from 'react-materialize';
import M from 'materialize-css';

// anything that is materialize react specific has to be imported


function Nav() {
  return (
 <Navbar
  alignLinks="right"
  brand={<a className="brand-logo blue-text text-darken-2" href="#">Project 3</a>}
  centerChildren
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
 >
 <NavItem href="">
    Home
  </NavItem>
  <NavItem href="components.html">
    About Us
  </NavItem>
  <NavItem href="components.html">
    News 
  </NavItem> 
</Navbar> 
  );
}

export default Nav;
