import React from "react";
import logo from "./Images/logo.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="left_div">
          <img className="logo" src={logo} alt="logo" />

          <ul className="left-list">
            <li>
              {" "}
              <a href="https://www.starbucks.com/menu" className="navbar-link">
                MENU
              </a>
            </li>
            <li>
              <a
                href="https://www.starbucks.com/rewards"
                className="navbar-link"
              >
                REWARDS
              </a>
            </li>
            <li>
              <a href="https://www.starbucks.com/gift" className="navbar-link">
                GIFT CARDS
              </a>
            </li>
          </ul>
        </div>
        <div className="right-list">
          <div className="find">
            {" "}
            <a
              href="https://www.starbucks.com/store-locator?map=39.635307,-101.337891,5z"
              className="navbar-link"
            >
              <FaMapMarkerAlt /> Find a store{" "}
            </a>
          </div>
          <button className="btn">
            <a
              href="https://www.starbucks.com/account/signin?ReturnUrl=%2F"
              className="sign-link"
            >
              {" "}
              Sign in
            </a>{" "}
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
