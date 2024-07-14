import React from "react";
import HomeComponent from "../HomeComponent";
import { getAssetPath } from "../../utils/getAssetPath";

const TeasHome: React.FC = () => {
  return (
    <HomeComponent
      imgSrc={getAssetPath("/photographs/teaspagehome.webp")}
      imgAlt="Tea Image"
      title="Ukrainian tea ceremony is here"
      content={
        <p>
          But for some reason the World Wide Web is "silent" about it. Chinese
          tea ceremony is obviously antique and famous, but Ukrainian tradition
          of making and drinking tea is not less ancient and meaningful.
        </p>
      }
    />
  );
};

export default TeasHome;
