import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" className="p-3" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand className="links" as={Link} to='/' ><h3>Sirajganj Dental Care</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" toggle" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link className="links" as={Link} to="signup">About Me</Nav.Link>
              <Nav.Link className="links" as={Link} to='/blogs'>Blogs</Nav.Link>
              <Nav.Link className="links" as={Link} to='/signin'>Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
