import React from "react";
import "../Components/Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return(
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            {/* <h4>Health on Time</h4> */}
             <ul className="list-unstyled"> 
              <li>
                <FaTwitter />
              </li>
              <li></li>
              </ul>
           </div> 
          {/* Column2 */}
          <div className="col">
            {/* <h4>Health on Time</h4> */}
             <ul className="list-unstyled"> 
              <li>
                <FaFacebookF />
              </li>
              </ul> 
              </div>
          {/* Column3 */}
          <div className="col">
           {/* <h4>Health on Time</h4> */}
               <ul className="list-unstyled"> 
              <li>
              <FaInstagram />
              </li>
              <li></li>
              </ul> 
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Health on Time | All rights reserved | Terms of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  )
}


export default Footer;