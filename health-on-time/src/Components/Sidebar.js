import "./Sidebar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CalendarPage from "../Pages/CalendarPage";
import MedicineCabinet from "../Pages/MedicineCabinet";

/* Sidebar code adapted from https://bootsnipp.com/snippets/Zkezz and integrated with React Router 
sidebar example https://reactrouter.com/web/example/sidebar - Note: sidebar property of each route 
not really used here but could be - see react router sidebar example */

const routes = [
    {
    //path: "/", 
    path: '/app',
    exact: true,
        sidebar: () => <div>Calendar sidebar</div>,
        main: () => <div><CalendarPage /></div>
        
  },
  {
    path: '/friends',
    exact: true,
    sidebar: () => <div>Partners sidebar</div>,
    main: () => <div>Accountability Partners</div>
  },
  {
    path: '/cabinet',
    exact: true,
      sidebar: () => (
        <div>Med Cabinet sidebar</div>
      ),
    main: () => <MedicineCabinet />
  },
  {
    path: '/search',
    exact: true,
    sidebar: () => <div>Search sidebar</div>,
    main: () =>(
        <>
            <div>Search for Meds Main Content</div>
            <p>some content
            </p>
        </>
    )         
    },
    {
        path: '/settings',
        exact: true,
        sidebar: () => <div>Settings sidebar</div>,
        main: () => <div>Settings main section</div>
    },
    
]; // end routes

function Sidebar({ profileImgUrl }) {
    // If the url to a profile image wasn't provided, use default image
    if (profileImgUrl === undefined) {
        profileImgUrl = "https://ssl.gstatic.com/accounts/ui/avatar_2x.png";
    }

    return (
        <>
            <Row>
                <Col xs={2} sm={2} md={1}>
                    <Image style={{ maxWidth: "75px" }} src={profileImgUrl} thumbnail />
                </Col>
            </Row> 

            <Router>
                <div id="outer-div">
                    
                    <div id="wrapper">
                        
                        <div id="sidebar-wrapper">
                            <aside id="sidebar">

                                <ul id="sidemenu" className="sidebar-nav">

                                    <li>
                                        <Link to="/app">
                                            <span className="sidebar-icon"><i className="fa fa-calendar"></i></span>
                                            <span className="sidebar-title">Home</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/friends">
                                            <span className="sidebar-icon"><i className="fa fa-users"></i></span>
                                            <span className="sidebar-title">Accountability Friends</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cabinet">
                                            <span className="sidebar-icon"><i className="fa fa-plus-square"></i></span>
                                            <span className="sidebar-title">Medicine Cabinet</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/search">
                                            <span className="sidebar-icon"><i className="fa fa-search"></i></span>
                                            <span className="sidebar-title">Search for Meds</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/settings">
                                            <span className="sidebar-icon"><i className="fa fa-cog"></i></span>
                                            <span className="sidebar-title">Settings</span>
                                        </Link>
                                    </li>

                                </ul>
                            </aside>            
                        </div> {/* end div sidebar-wrapper */}
                        {/*<div style={{ flex: 1, padding: "10px" }}>  */}
                        <div id="mainSection">    
                            <Switch>
                                {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.main />} 
                                    />
                                ))}
                            </Switch>
                        </div>
                    </div> {/* end div wrapper */}
                </div> {/* end outer-div */}
            </Router>
        </>
    )
}
export default Sidebar;