import "../Styles/Sidebar.css";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* Sidebar code adapted from https://bootsnipp.com/snippets/Zkezz and integrated with React Router 
sidebar example https://reactrouter.com/web/example/sidebar - Note: sidebar property of each route 
not really used here but could be - see react router sidebar example */

function Sidebar({ profile_pic, name }) {
  // If the url to a profile image wasn't provided, use default image
  //   if (profile_pic === null) {
  let defaultImageUrl = "https://ssl.gstatic.com/accounts/ui/avatar_2x.png";
  //   }

  return (
    <div>
      {/*//TODO:  Move this to dashboard//*/}
      <Row>
        <Col xs={2} sm={2} md={1}>
          <Image
            // style={{ maxWidth: "75px" }}
            src={profile_pic ? profile_pic : defaultImageUrl}
            // rounded
            thumbnail
          />
        </Col>
        <Col>
          <h2>Welcome Back, {name}!</h2>
        </Col>
      </Row>
      <div id="outer-div">
        <div id="wrapper">
          <div id="sidebar-wrapper">
            <aside id="sidebar">
              <ul id="sidemenu" className="sidebar-nav">
                <li>
                  <Link to="/calendar">
                    <span className="sidebar-icon">
                      <i className="fa fa-calendar"></i>
                    </span>
                    <span className="sidebar-title">Calendar</span>
                  </Link>
                </li>
                <li>
                  <Link to="/friends">
                    <span className="sidebar-icon">
                      <i className="fa fa-users"></i>
                    </span>
                    <span className="sidebar-title">
                      Accountability Friends
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/medicine">
                    <span className="sidebar-icon">
                      <i className="fa fa-plus-square"></i>
                    </span>
                    <span className="sidebar-title">Medicine Cabinet</span>
                  </Link>
                </li>
                <li>
                  <Link to="/addmed">
                    <span className="sidebar-icon">
                      <i className="fa fa-search"></i>
                    </span>
                    <span className="sidebar-title">Search for Meds</span>
                  </Link>
                </li>
                <li>
                  <Link to="/settings">
                    <span className="sidebar-icon">
                      <i className="fa fa-cog"></i>
                    </span>
                    <span className="sidebar-title">Settings</span>
                  </Link>
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
