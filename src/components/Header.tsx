import { useState } from "react";
import logo from "/logos/logo.png"; // Import your logo
import { BsPerson } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header-container">
      <div className="header-left">
        <a href="/#">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>
      <div className="header-right">
        <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <a href="/#/teas">LEARN</a>
          </li>
          <li>
            <a href="/richka/#/oils">ABOUT</a>
          </li>
          <li>
            <a href="/#/business">BUSINESS</a>
          </li>
          <li className="icons">
            <a href="#login" id="logoright">
              <BsPerson />
            </a>
            <a href="#favorites" id="logoright">
              <MdFavoriteBorder />
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <FaBars />
        </div>
      </div>
    </div>
  );
}

export default Header;
