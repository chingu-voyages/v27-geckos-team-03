import React from "react";
import "../Styles/Footer.css";
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
              <li className="iconLi">
                <a href="./#" className="footerIconLink">
                  <FaTwitter className="footerIcon"/>
                </a>
              </li>
              <li></li>
              </ul>
           </div> 
          {/* Column2 */}
          <div className="col">
            {/* <h4>Health on Time</h4> */}
             <ul className="list-unstyled"> 
              <li className="iconLi">
                <a href="./#" className="footerIconLink">
                  <FaFacebookF className="footerIcon" />
                </a>
              </li>
              </ul> 
              </div>
          {/* Column3 */}
          <div className="col">
           {/* <h4>Health on Time</h4> */}
               <ul className="list-unstyled"> 
              <li className="iconLi">
                <a href="./#" className="footerIconLink">
                  <FaInstagram className="footerIcon" />
                </a>
              </li>
              <li></li>
              </ul> 
          </div>
        </div>
        <hr id="theLine" />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Health on Time | All rights reserved | <a className="footerLink" href="./#">Terms of Service</a> | <a className="footerLink" href="./#">Privacy</a>
          </p>
        </div>
      </div>
    </div>
  )
}


export default Footer;
