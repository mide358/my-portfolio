import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';








const TheNav = () => {
  return (
    <Navbar collapseOnSelect className="navigation" bg="light" expand="lg" >
  <Navbar.Brand style={{color:"#fffffe", fontSize:"2.1rem", fontWeight:'bolder'}} href="/about" >IYIMIDE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="ml-auto all-link">
      <Link id="link"  to="/" exact="true"  >Home</Link>
      <Link  id="link" to="/about" >About </Link>
      <Link  id="link" to="/portfolio" >Porfolio</Link>
      <Link  id="link" to="/contact" >Contact</Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
   );
}

export default TheNav;
