import "../Styles/Sidebar.css";
import { NavLink } from "react-router-dom";

/* Sidebar code adapted from https://bootsnipp.com/snippets/Zkezz and integrated with React Router 
sidebar example https://reactrouter.com/web/example/sidebar - Note: sidebar property of each route 
not really used here but could be - see react router sidebar example */

function Sidebar() {
  return (
    <div>
      <div id="outer-div">
        <div id="wrapper">
          <div id="sidebar-wrapper">
            <aside id="sidebar">
              <ul id="sidemenu" className="sidebar-nav">
                <li>
                  <NavLink to="/calendar">
                    <span className="sidebar-icon">
                      <i className="fa fa-calendar"></i>
                    </span>
                    <span className="sidebar-title">Calendar</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/friends">
                    <span className="sidebar-icon">
                      <i className="fa fa-users"></i>
                    </span>
                    <span className="sidebar-title">
                      Accountability Friends
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/medicine">
                    <span className="sidebar-icon">
                      <i className="fa fa-plus-square"></i>
                    </span>
                    <span className="sidebar-title">Medicine Cabinet</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/addmed">
                    <span className="sidebar-icon">
                      <i className="fa fa-search"></i>
                    </span>
                    <span className="sidebar-title">Search for Meds</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/settings">
                    <span className="sidebar-icon">
                      <i className="fa fa-cog"></i>
                    </span>
                    <span className="sidebar-title">Settings</span>
                  </NavLink>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
