import React from "react";
import HomeComponent from "../HomeComponent";

const OilsHome: React.FC = () => {
  return (
    <HomeComponent
      imgSrc="/photographs/oilspagehome.jpeg"
      imgAlt="Oil Image"
      title="What Are Essential Oils?"
      content={
        <p>
          Essential oils are the essence of a plant, a gift from the earth,
          distilled and prepared for you to bring the power of nature into your
          home. Inside many plants — hidden in roots, seeds, flowers, bark — are
          concentrated, highly potent chemical compounds. These natural
          compounds are essential oils. Essential oils give a plant its scent,
          protect it from hazardous environmental conditions, and even assist it
          with pollination, among other important functions and benefits.
        </p>
      }
    />
  );
};

export default OilsHome;
