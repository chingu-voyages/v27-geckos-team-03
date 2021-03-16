import React from "react";
//import { NavLink } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

const Navbar = ({ loggedIn, handleLogout }) => {

  return (
    <div className="Navbar">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
      >
        <LinkContainer to="/">
          <ReactBootStrap.Navbar.Brand>
            Health on Time
          </ReactBootStrap.Navbar.Brand>
        </LinkContainer>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <LinkContainer to="/">
              <ReactBootStrap.Nav.Link eventKey={'0'} href="/">
                Home
              </ReactBootStrap.Nav.Link>
            </LinkContainer>
            {loggedIn ? (
              <ReactBootStrap.Nav.Link eventKey={'home'} href="#" onClick={handleLogout}>
                  Logout
                </ReactBootStrap.Nav.Link>
            ) : (
                <>
                <LinkContainer to="login">
                  <ReactBootStrap.Nav.Link eventKey={'login'}>
                    Login
                  </ReactBootStrap.Nav.Link>
                </LinkContainer>

                <LinkContainer to="/signup">
                  <ReactBootStrap.Nav.Link eventKey={'signup'}>
                    Sign up
                  </ReactBootStrap.Nav.Link>
                </LinkContainer>
                </>
            )}
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default Navbar;
