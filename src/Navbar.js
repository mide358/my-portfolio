import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const TheNav = () => {
  return (
    <Navbar
      collapseOnSelect
      className="navigation"
      bg="light"
      expand="lg"
      fixed="top"
    >
      <Navbar.Brand
        style={{ color: "#fffffe", fontSize: "2.1rem", fontWeight: "bolder" }}
        href="/about"
      >
        IYIMIDE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto all-link">
          <Nav.Link id="link" eventKey={1} as={Link} to="/" exact="true">
            Home
          </Nav.Link>
          <Nav.Link id="link" eventKey={2} as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link id="link" eventKey={3} as={Link} to="/portfolio">
            Porfolio
          </Nav.Link>
          <Nav.Link id="link" eventKey={4} as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TheNav;
