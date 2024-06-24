import React from "react";
import { getAssetPath } from "../utils/getAssetPath";

const Process: React.FC = () => {
  return (
    <div id="LEARN" className="why-richka-container">
      <div className="why-richka-header">
        <h1>Why Richka?</h1>
        <a href="/richka/#/oils">DISCOVER OUR PRODUCTION PROCESS</a>
      </div>
      <div className="why-richka-content">
        <div className="why-richka-item">
          <img src={getAssetPath("/photographs/plants.jpeg")} alt="" />
          <h2>WE ARE GROWING HERBS FOR ALL OUR PRODUCTS</h2>
          <p>
            We decided to keep all the process from choosing seeds to packing
            and shipping products in-house. That's how we transfer our love and
            care to every gram of product you use.
          </p>
        </div>
        <div className="why-richka-item">
          <img
            src={getAssetPath("/photographs/cows.jpeg")}
            alt="No Fertilizers"
          />
          <div className="why-richka-item-text">
            <h2>WE DON'T USE FERTILIZERS AND SYNTHETIC ADDITIONS</h2>
            <p>
              Having our own code of ethics we primarily make effort to ensure
              that our products are useful to both our customers and do not harm
              nature. Sustainability is Richka #1 priority.
            </p>
          </div>
        </div>
        <div className="why-richka-item">
          <img
            src={getAssetPath("/photographs/bottles.jpeg")}
            alt="Quality Products"
          />
          <div className="why-richka-item-text">
            <h2>
              WE ARE RESPONSIBLE FOR THE UNDENIABLE QUALITY OF THE PRODUCT AND
              SELL IT TO YOU WITHOUT INTERMEDIARIES
            </h2>
            <p>
              In this way you get natural products at the manufacturer's price,
              avoiding the high margins that other processing companies and
              distributors of similar products have.
            </p>
          </div>
        </div>
        <a id="phone-link" href="#">
          DISCOVER OUR PRODUCTION PROCESS
        </a>
      </div>
    </div>
  );
};

export default Process;
