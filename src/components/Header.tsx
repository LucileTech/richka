import React, { useState, useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "/logos/logo.png"; // Import your logo
import useAuth from "../auth/useAuth";
import NavBurger from "./NavBurger"; // Import the NavBurger component

const Header: React.FC = () => {
  const { isLoggedIn, removeUser } = useAuth();
  const [burgerOpen, setBurgerOpen] = useState(false); // State for burger menu
  const [showHeader, setShowHeader] = useState(true); // State to track header visibility

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowHeader(currentScrollPos <= 0); // Hide header when scrolled down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <div className={`header-container ${showHeader ? "" : "hide-header"}`}>
      <div className="header-left">
        <div className="hamburger" onClick={toggleBurger}>
          <RxHamburgerMenu />
        </div>
        {showHeader && burgerOpen && <NavBurger />}{" "}
        {/* Conditionally render NavBurger */}
        <div className="hamburger">
          {isLoggedIn ? (
            <a onClick={removeUser} href="#login" id="logoright">
              <MdLogout />
            </a>
          ) : (
            <a href="#login" id="logoright">
              <BsPerson />
            </a>
          )}
        </div>
        <a href="/richka/#">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>
      <div className="header-right">
        <ul className={burgerOpen ? "hide-on-desktop" : ""}>
          <li>
            <a href="/richka/#/oils">OILS</a>
          </li>
          <li>
            <a href="/richka/#/teas">TEAS</a>
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
