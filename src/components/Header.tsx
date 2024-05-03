import React from "react";

function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <span>RICHKA</span>
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
