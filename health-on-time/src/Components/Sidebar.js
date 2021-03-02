import "./Sidebar.css";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CalendarPage from "../Pages/CalendarPage";
import MedicineCabinet from "../Pages/MedicineCabinet";

const routes = [
    {
    //path: "/", // this was what it was when this file was working SPA as App.js
    path: '/app',
    exact: true,
        sidebar: () =>
            <>
                <div>Calendar sidebar</div>
            </>,
        main: () =>
            <div>
                <CalendarPage />
            </div>
        
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

function Sidebar() {
    return (
        <Router>
            <div id="outer-div">
                {/* 
                <div className="profile-img-div">
                    <div className="container">
                        <img src="https://dummyimage.com/125x125/000/fff" alt="" />
                    </div>
                </div>
                */}
                <div id="wrapper">
                    {/* <img src="https://dummyimage.com/100x100/000/fff" alt="" style={{ flex: 1, padding: "10px" }} /> */}
                    
                    <div id="sidebar-wrapper">

                        <aside id="sidebar">
                            <img src="https://dummyimage.com/100x100/000/fff" alt="" style={{ flex: 1, padding: "10px" }} />

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
    )
}
export default Sidebar;
