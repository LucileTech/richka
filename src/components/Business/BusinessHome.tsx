import React from "react";

const BuisinessHome: React.FC = () => {
  return (
    <div className="home-container">
      {/* Left part */}
      <div className="home-container-left">
        <img
          src="/photographs/businesshome.jpeg"
          alt="Wellness Image"
          className="image"
        />
      </div>

      {/* Right part */}
      <div className="home-container-right">
        <div className="title-box">
          <h1>Join Our Professional Program</h1>
        </div>
        <div className="content-home">
          <p>
            <a href="#" className="shop-link">
              APPLY NOW
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuisinessHome;
