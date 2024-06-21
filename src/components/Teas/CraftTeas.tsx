import React from "react";

const benefits = [
  {
    imgSrc: "/public/logos/Craft_Teas_1.png",
    text: "Aroma and taste obtained during brewing are rich and multifaceted;",
  },
  {
    imgSrc: "/public/logos/Craft_Teas_2.png",
    text: "  Large fraction of tea. We preserve leaves of herbs and flowers from crush so you easily can distinguish the components and enjoy the view of brewed tea.",
  },
  {
    imgSrc: "/public/logos/Craft_Teas_3.png",
    text: "Clear and simple composition (without synthetic flavors and impurities) and defined properties (for vitality, soothing or relaxation)",
  },
  {
    imgSrc: "/public/logos/Craft_Teas_4.png",
    text: "Only loose leaf tea. Tea bags free is one of our priorities is caring for the environment.",
  },
];

const BenefitsOfJoining: React.FC = () => {
  return (
    <div className="benefits-container" id="craft-teas">
      <h1 className="title">Craft herbal tea vs tea from mass market</h1>
      <div className="container" id="craft-teas">
        {benefits.map((benefit, index) => (
          <div className="benefit-item" key={index}>
            <img src={benefit.imgSrc} alt={`Benefit ${index + 1}`} />
            <p className="benefit-text" id="text-teas">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsOfJoining;
