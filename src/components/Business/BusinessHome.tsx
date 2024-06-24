import React from "react";
import { getAssetPath } from "../../utils/getAssetPath";

const BuisinessHome: React.FC = () => {
  return (
    <div className="home-container">
      {/* Left part */}
      <div className="home-container-left">
        <img
          src={getAssetPath("/photographs/businesshome.webp")}
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
            <a href="/richka/#/proform" className="shop-link">
              APPLY NOW
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuisinessHome;
