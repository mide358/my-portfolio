import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'





const TheNav = () => {
  return (
    <Navbar className="navigation" bg="light" expand="lg">
  <Navbar.Brand style={{color:"#fffffe", fontSize:"2.1rem", fontWeight:'bolder'}} href="/about" >IYIMIDE</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="ml-auto all-link">
      <Nav.Link id="link" href="/">Home</Nav.Link>
      <Nav.Link id="link" href="/about">About</Nav.Link>
      <Nav.Link id="link" href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link id="link" href="/contact">Contact</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
   );
}

export default TheNav;
