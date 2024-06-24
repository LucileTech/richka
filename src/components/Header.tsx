// import { useState } from "react";
import logo from "/logos/logo.png"; // Import your logo
// import { BsPerson } from "react-icons/bs";
// import { MdFavoriteBorder } from "react-icons/md";
// import { FaBars } from "react-icons/fa";

function Header() {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  return (
    <div className="header-container">
      <div className="header-left">
        {/* <div className="hamburger" onClick={toggleMobileMenu}>
          <FaBars />
        </div> */}
        <a href="/richka/#">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>
      <div className="header-right">
        {/* <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}> */}
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
          {/* <li className="icons">
            <a href="#login" id="logoright">
              <BsPerson />
            </a>
            <a href="#favorites" id="logoright">
              <MdFavoriteBorder />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Header;
