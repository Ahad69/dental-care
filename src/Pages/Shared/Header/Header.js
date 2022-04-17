import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import './Header.css'

const Header = () => {

  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

 

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" className="p-3" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand className="links" as={Link} to='/' ><h3>Ahad Dental Care</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" toggle" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link className="links" as={Link} to="aboutme">About Me</Nav.Link>
              <Nav.Link className="links" as={Link} to='/blogs'>Blogs</Nav.Link>
              
              {
                user?.email ? <><button className="btn text-white fw-bold" onClick={logout}>Log Out</button> <img width={40} className='rounded-circle m-auto' src={user?.photoURL} alt="" /></> : 
                  <Nav.Link className="links" as={Link} to='/signin'>Log In</Nav.Link>
                 
                
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default Header;
