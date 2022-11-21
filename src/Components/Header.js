import React from "react";
import logo from "./Images/logo.jpg";
import icon_open from "./Images/icon-menu.svg";
import icon_close from "./Images/icon-menu-close.svg";
import { FaMapMarkerAlt } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="left_div">
          <img className="logo" src={logo} alt="logo" />
          <div className="icons-2">
          <img  className="icon ham-icon" src={icon_open} />
    <img className="icon close-icon" src={ icon_close} />
    </div> 
          
        </div>
        <div className="right-list ul">
        <ul className="left-list ">
            <li>
              <a href="https://www.starbucks.com/menu" className="navbar-link">MENU</a>
            </li>
            <li>
              <a href="https://www.starbucks.com/rewards"
                className="navbar-link" >
                REWARDS
              </a>
            </li>
            <li>
              <a href="https://www.starbucks.com/gift" className="navbar-link">
                GIFT CARDS
              </a>
            </li>
          
          <p className="find">
            <a
              href="https://www.starbucks.com/store-locator?map=39.635307,-101.337891,5z"
              className="navbar-link">
              <FaMapMarkerAlt /> Find a store
            </a>
          </p>
          </ul> 
          <button className="btn">
            <a href="https://www.starbucks.com/account/signin?ReturnUrl=%2F"
              className="sign-link"> Sign in</a>
          </button>
          <button className="btnn">
            <a
              href="https://www.starbucks.com/account/create"
              className="button-link"
            >
              Join now
            </a>
          </button>
          
        </div>
        
      </nav>

      <hr />
    </div>
  );
}

export default Header;
