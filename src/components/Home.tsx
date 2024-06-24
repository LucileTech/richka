import React from "react";
import HomeComponent from "./HomeComponent";
import { getAssetPath } from "../utils/getAssetPath";

const Home: React.FC = () => {
  return (
    <HomeComponent
      imgSrc={getAssetPath("/photographs/home.jpeg")}
      imgAlt="Wellness Image"
      title="Wellness at Your Fingertips"
      content={
        <>
          <p>
            We’re Richka. We create natural products for your well-being and
            beauty from our own herbs.
          </p>
          <p>
            <a href="/richka/richka/#/oils" className="oils-link">
              LEARN MORE
            </a>
          </p>
        </>
      }
    />
  );
};

export default Home;
