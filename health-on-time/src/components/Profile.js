import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Profile.css";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (

 <div className="container">
    <header className="jumbotron">
      <h3>
        <strong>{currentUser.username}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
      {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
    </p>
    <p>
      <strong>Id:</strong> {currentUser.id}
    </p>
    <p>
      <strong>Email:</strong> {currentUser.email}
    </p>
    <ul>
      {currentUser.roles &&
        currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
    </ul> 

      <div className="col-md-4">
        <div className="card card-container1">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card1"
          />
        </div>

       <div className="col-4 col-md-4">
          <Nav navbar>
            <div className="card1">
              <NavItem>
                <NavLink className="nav-link" to="/medicineCabinet">
                  Medicine Cabinet
                </NavLink>
              </NavItem>
            </div>
            <div className="col-4 col-md-4 " className="card1">
              <NavItem>
                <NavLink className="nav-link" to="/accountabilityPartners">
                  Accountability Partners
                </NavLink>
              </NavItem>
            </div>
            <div className="col-4 col-md-4" className="card1">
              <NavItem>
                <NavLink className="nav-link" to="/serachForMeds">
                  Search for meds
                </NavLink>
              </NavItem>
            </div>
            <div className="col-4 col-md-4" className="card1">
              <NavItem>
                <NavLink className="nav-link" to="/calender">
                  Calendar
                </NavLink>
              </NavItem>
            </div>
            <div className="col-4 col-md-4" className="card1">
              <NavItem>
                <NavLink className="nav-link" to="/settings">
                  Settings
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </div>
   </div> 
    </div> 
  );
};

export default Profile;

       