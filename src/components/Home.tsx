import React from "react";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Left part */}
      <div className="home-container-left">
        <img
          src="./../../public/photographs/home.jpeg"
          alt="Wellness Image"
          className="image"
        />
      </div>

      {/* Right part */}
      <div className="home-container-right">
        <div className="title-box">
          <h1>Wellness at Your Fingertips</h1>
        </div>
        <div className="content-home">
          <p>
            We’re Richka. We create natural products for your well-being and
            beauty from our own herbs.
          </p>
          <p>
            <a href="#" className="shop-link">
              Shop Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
