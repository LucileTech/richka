import React from "react";
import { BsPerson } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import logo from "/logos/logo.png"; // Import your logo
import useAuth from "../auth/useAuth";

const Header: React.FC = () => {
  const { isLoggedIn, removeUser } = useAuth();

  return (
    <div className="header-container">
      <div className="header-left">
        <a href="/richka/#">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>
      <div className="header-right">
        <ul>
          <li>
            <a href="/richka/#/teas">LEARN</a>
          </li>
          <li>
            <a href="/richka/#/oils">ABOUT</a>
          </li>
          <li>
            <a href="/richka/#/business">BUSINESS</a>
          </li>
          <li className="icons">
            {isLoggedIn ? (
              <a onClick={removeUser} href="#login" id="logoright">
                <MdLogout />
              </a>
            ) : (
              <a href="#login" id="logoright">
                <BsPerson />
              </a>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
