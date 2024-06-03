import React from "react";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>WELCOME TO THE WORLD OF NATURAL HERBS</h1>
        <h1>Healing Power of Nature in Every Drop</h1>
        <p>
          We founded Richka in order to revive the traditions of using Ukrainian
          herbs in everyday life and to bring their benefits and pleasure of use
          to every home. That is why we grow and collect herbs in a picturesque
          and ecologically pure region of Ukraine. Only in this way can we
          guarantee the highest quality and benefits of our products for your
          health and their accessibility. Richka's mission is to revive
          Ukrainian natural aromas and return the traditions of using the
          healing powers of nature.
        </p>
      </div>
      {/* For desktop and tablet */}

      <div className="about-section" id="dekstop-version">
        <div className="about-content">
          <div className="about-content-inside">
            <h2>About Richka Brand</h2>
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
            <h2>About Richka Brand</h2>
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

      <div className="about-section">
        <div className="about-image">
          <div className="about-image-inside">
            <img src="/photographs/fields.jpeg" alt="Richka Fields" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-content-inside">
            <h2>Values and Impact</h2>
            <p>
              We now grow lavender, mint, chamomile, thyme, calendula, althaea,
              valerian, echinacea, calendula, Baikal, hyssop, lemon balm, sage,
              lemon balm, sage and nutmeg, mallow, Dioscorea nipon, kotovnik,
              lemongrass, lofant aniseed but the list of herbs for our products
              is constantly expanding.
            </p>
            <p>
              The natural aromas of essential oils and herbs in our collection
              are able to improve physical health, psycho-emotional state,
              improve the quality of life, make it more environmentally friendly
              and conscious.
            </p>
            <p>
              Our oils are third-party GC/MS tested for 100% purity, safety and
              quality so you can rest assured that you’re getting the very best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
