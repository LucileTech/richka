import React from "react";

const TeasHome: React.FC = () => {
  return (
    <div className="home-container" id="learn-teas">
      {/* Left part */}
      <div className="home-container-left">
        <img
          src="/photographs/teaspagehome.jpeg"
          alt="Tea Image"
          className="image"
        />
      </div>

      {/* Right part */}
      <div className="home-container-right">
        <div className="title-box">
          <h1>Ukrainian tea ceremony is here</h1>
        </div>
        <div className="content-home">
          <p>
            But for some reason the World Wide Web is "silent" about it. Chinese
            tea ceremony is obviously antique and famous, but Ukrainian
            tradition of making and drinking tea is not less ancient and
            meaningfull.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeasHome;
