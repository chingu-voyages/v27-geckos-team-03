import React from "react";
import { NavLink } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
      >
        <NavLink to="/" exact={true}>
          <ReactBootStrap.Navbar.Brand href="#home">
            Health on Time
          </ReactBootStrap.Navbar.Brand>
        </NavLink>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.NavDropdown
              title="Settings"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                Profile Page
              </ReactBootStrap.NavDropdown.Item>
              <NavLink to="/medicine">
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                  Medicine Cabinet
                </ReactBootStrap.NavDropdown.Item>
              </NavLink>
              <NavLink to="/calendar">
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                  Calendar
                </ReactBootStrap.NavDropdown.Item>
              </NavLink>

              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4"></ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <NavLink to="/" exact={true}>
              <ReactBootStrap.Nav.Link href="#home">
                Home
              </ReactBootStrap.Nav.Link>
            </NavLink>
            <ReactBootStrap.Nav.Link href="#about">
              About
            </ReactBootStrap.Nav.Link>
            <NavLink to="/signup" exact={true}>
              <ReactBootStrap.Nav.Link eventKey={2} href="#signup">
                Signup
              </ReactBootStrap.Nav.Link>
            </NavLink>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default Navbar;
