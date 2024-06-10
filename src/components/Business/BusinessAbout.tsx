import React from "react";

const BusinessAbout: React.FC = () => {
  return (
    <div className="about-container">
      {/* For desktop and tablet */}

      <div className="about-section" id="dekstop-version">
        <div className="about-content">
          <div className="about-content-inside">
            <h2>Why Richka?</h2>
            <p>
              RICHKA is a Ukrainian company. The idea of creating the brand was
              born on the picturesque banks of Vorskla river, next to the pine
              forests, where the founder of the brand Svitlana Chub used to
              relax and get inspired.
            </p>
            <p>
              "We grow our own medicinal and essential oils on the fertile land
              of Poltava without the use of chemical fertilizers and other
              harmful chemicals, because we want to preserve cleanness and
              usefulness of herbs for you. Poltava region is the heart of
              Ukraine, that is why we began to revive the most popular Ukrainian
              herbs, which have long been used by our ancestors to maintain
              health and beauty, here."
            </p>
            <a href="#">OUR STORY</a>
          </div>
        </div>
        <div className="about-image">
          <div className="about-image-inside">
            <img src="/photographs/founder2.jpeg" alt="Richka Founder" />
          </div>
        </div>
      </div>

      {/* For mobile */}
      <div className="about-section" id="phone-version">
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-inside">
              <img src="/photographs/founder2.jpeg" alt="Richka Founder" />
            </div>
          </div>
          <div className="about-content-inside">
            <h2>Why Richka?</h2>
            <p>
              RICHKA is a Ukrainian company. The idea of creating the brand was
              born on the picturesque banks of Vorskla river, next to the pine
              forests, where the founder of the brand Svitlana Chub used to
              relax and get inspired.
            </p>
            <p>
              "We grow our own medicinal and essential oils on the fertile land
              of Poltava without the use of chemical fertilizers and other
              harmful chemicals, because we want to preserve cleanness and
              usefulness of herbs for you. Poltava region is the heart of
              Ukraine, that is why we began to revive the most popular Ukrainian
              herbs, which have long been used by our ancestors to maintain
              health and beauty, here."
            </p>
            <a href="#">OUR STORY</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAbout;
