import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import ActiveLink from "../../ActiveLink/ActiveLink";
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
            <ActiveLink className="links" to='/'>Home</ActiveLink>
            <ActiveLink className="links" to="/aboutme">About Me</ActiveLink>
            
              <ActiveLink className="links"  to='/blogs'>Blogs</ActiveLink>
              
              {
                user?.email ? <div className=""><button className="btn p-0 mb-2 ms-5 text-white fw-bold" onClick={logout}>Log Out</button> <img width={50} className='rounded-circle  m-auto' src={user?.photoURL} alt="" /></div> : 
                  <ActiveLink className="links" as={Link} to='/signin'>Log In</ActiveLink>
                 
                
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default Header;
