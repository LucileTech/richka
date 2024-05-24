import React from "react";
import logo from "/logos/logo.png"; // Importez votre logo

function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header-right">
        <ul>
          <li>
            <a href="#shop">SHOP</a>
          </li>
          <li>
            <a href="#learn">LEARN</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#blog">BLOG</a>
          </li>
          <li>
            <a href="#business">BUSINESS</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
