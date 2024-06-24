import React from "react";
import { getAssetPath } from "../utils/getAssetPath";

const ShopAll: React.FC = () => {
  return (
    <div className="shop-all">
      <h2>Choose your new natural experience</h2>
      <div className="products">
        <div className="product">
          <img
            src={getAssetPath("/photographs/tea.jpeg")}
            alt="Tea Emerald Distance"
          />
          <p>
            Tea “Emerald Distance” for cosy evening with unusual relaxing
            flavour
          </p>
        </div>
        <div className="product">
          <img
            src={getAssetPath("/photographs/oil.png")}
            alt="Thyme Essential Oil"
          />
          <p>
            Thyme Essential Oil for toning aromatherapy session or a healing
            massage
          </p>
        </div>
      </div>
      <button className="shop-all-button">
        <a href="/richka/#/oils" className="oils-link">
          MORE ABOUT OILS
        </a>
      </button>
    </div>
  );
};

export default ShopAll;
