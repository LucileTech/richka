import React from "react";

const benefits = [
  { imgSrc: "/public/logos/Discount icon.png", text: "30% discount" },
  {
    imgSrc: "/public/logos/Purity button.png",
    text: "Pure natural products manufactured completely by our team",
  },
  {
    imgSrc: "/public/logos/Savings icon.png",
    text: "Save up to 50% compared to MLM competitors",
  },
  {
    imgSrc: "/public/logos/No cruelty icon.png",
    text: "Tested and certified products to ensure quality, safety & effectiveness",
  },
];

const BenefitsOfJoining: React.FC = () => {
  return (
    <div className="benefits-container">
      <h1 className="title">BENEFITS OF JOINING</h1>
      <div className="container">
        {benefits.map((benefit, index) => (
          <div className="benefit-item" key={index}>
            <img src={benefit.imgSrc} alt={`Benefit ${index + 1}`} />
            <p className="benefit-text">{benefit.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsOfJoining;
