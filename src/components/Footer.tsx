import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <div className="footer-signup">
            <p>
              Want to get all the latest news first? Sign up for our emails and
              get 10% off for your first purchase
            </p>
            <form>
              <input type="email" placeholder="E-MAIL" />
              <button type="submit" className="footer-button">
                SUBMIT
              </button>
            </form>
            <div className="footer-social">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h3>CONTACT US</h3>
          <p>+380 97 948 40 41</p>
          <p>store.ricka@gmail.com</p>
          <p>Monday-Friday 9:00am to 18:00pm</p>
          <p>Business Department</p>
          <p>+380979484042</p>
          <p>partner.ricka@gmail.com</p>
        </div>
        <div className="footer-column">
          <h3>ABOUT</h3>
          <a id="footer-link" href="/#/oils" className="oils-link">
            Our Oils
          </a>
          <a id="footer-link" href="/#/teas" className="teas-link">
            Our Teas
          </a>
        </div>
        <div className="footer-column">
          <h3>SHOPPING</h3>
          <a id="footer-link" href="/#/business" className="oils-link">
            Business
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
