import React from "react";

const EffectSelector: React.FC = () => {
  return (
    <div className="container">
      <div className="text-section">
        {/* <p className="title">BROWSE TEAS BY USE</p> */}
        <h1 className="question">What effect would you like to achieve?</h1>
      </div>
      <div className="effects">
        <p className="effect">RELAXATION</p>
        <p className="effect">IMMUNE SYSTEM BOOST</p>
        <p className="effect">SLEEP</p>
        <p className="effect">BRAIN STIMULATION</p>
        <p className="effect">PAIN RELIEF</p>
        <p className="effect">ENERGY</p>
      </div>
    </div>
  );
};

export default EffectSelector;
