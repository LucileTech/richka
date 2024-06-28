import React from "react";
import HomeComponent from "../HomeComponent";
import { getAssetPath } from "../../utils/getAssetPath";

const BuisinessHome: React.FC = () => {
  return (
    <HomeComponent
      imgSrc={getAssetPath("/photographs/businesshome.webp")}
      imgAlt="Oil Image"
      title="Join Our Professional Program"
      content={
        <p>
          <a href="/richka/#/proform" className="shop-link">
            APPLY NOW
          </a>
        </p>
      }
    />
  );
};

export default BuisinessHome;
