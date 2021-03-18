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
        <Navbar.Brand className="d-flex" as={Link} to="/">
            
          <div className="d-inline-block">
            <img src="timer-graphics/red_timer_v1.png" alt="logo" style={{ width: "40px" }} />
          </div>  
          <div className="d-inline-block ml-2 align-self-end" style={{ fontSize: "1.45rem", marginBottom: "0.08rem" }}>
            Health on Time
          </div>
            
          
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
