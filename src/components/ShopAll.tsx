import React from "react";

const ShopAll: React.FC = () => {
  return (
    <div className="shop-all">
      <h2>Choose your new natural experience</h2>
      <div className="products">
        <div className="product">
          <img src="/photographs/tea.jpeg" alt="Tea Emerald Distance" />
          <p>
            Tea “Emerald Distance” for cosy evening with unusual relaxing
            flavour
          </p>
        </div>
        <div className="product">
          <img src="/photographs/oil.png" alt="Thyme Essential Oil" />
          <p>
            Thyme Essential Oil for toning aromatherapy session or a healing
            massage
          </p>
        </div>
      </div>
      <button className="shop-all-button">SHOP ALL</button>
    </div>
  );
};

export default ShopAll;
