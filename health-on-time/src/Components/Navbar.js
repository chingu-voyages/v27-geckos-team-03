import React from "react";
//import { NavLink } from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';

const HealthNavbar = ({ loggedIn, handleLogout }) => {

  return (
    <div className="Navbar">
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand as={Link} to="/">
            Health on Time
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav defaultActiveKey={'/'}>
            <Nav.Link as={Link} to="/" eventKey={'/'}>Home</Nav.Link>
            {loggedIn ? (
              <Nav.Link as={Link} to="/" eventKey={'logout'} onClick={handleLogout}>
                  Logout
              </Nav.Link>
            ) : (
                <>
                  <Nav.Link as={Link} to="/login" eventKey={'login'}>
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup" eventKey={'signup'}>
                    Sign up
                  </Nav.Link>
                </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HealthNavbar;
