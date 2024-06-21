import React from "react";

const AboutTeas: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <div className="about-content" id="about-teas-content">
          <div className="about-content-inside">
            <div className="about-content-inside-teas">
              <h1>It Can Help You Unwind</h1>
              <h1 id="number-content-inside-teas">1</h1>
            </div>
            <p>
              Tea is popularly known for its calming effects and has been used
              for centuries as the focal point of social events and unwinding
              after a long day. In the modern world, pressure and stress are
              often dealt with by taking medication, but the side effects of
              these medicines can be worse than the stress itself.
            </p>
            <p>
              Instead, think about using herbal tea to relax and rejuvenate.
              It's a safer and more natural alternative to prescription
              medicines and can help with stress and anxiety. The relaxing
              properties of teas can also aid in sleep disorders such as
              insomnia or restless sleep.
            </p>
            <a href="#">
              Drink This: Peppermint, lemon balm, chamomile, marigold, willow
              herb
            </a>
          </div>
        </div>
        <div className="about-content" id="about-teas-content">
          <div className="about-content-inside">
            <div className="about-content-inside-teas">
              <h1>Tea Boosts Your Immune System</h1>
              <h1 id="number-content-inside-teas">2</h1>
            </div>
            <p>
              Even people who don't regularly drink tea know the positive
              effects tea offers when it comes to immunity. It's why most of us
              opt for a piping hot cup of tea when we're feeling under the
              weather. Tulsi tea has been used in Ayurveda to boost the immune
              system during and after illnesses, largely in part because it
              offers antifungal and antibacterial properties. The medicinal
              properties of tea mean you can quit your cold or flu sooner.
            </p>
            <a href="#">Drink This: THYME, echinacea, sage and fennel</a>
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="about-content" id="about-teas-content">
          <div className="about-content-inside">
            <div className="about-content-inside-teas">
              <h1>It Stimulates Brain Function</h1>
              <h1 id="number-content-inside-teas">3</h1>
            </div>
            <p>
              While you can drink just a cup or two of tea when you're sick to
              get the health benefits, if you want the brain boosting power of
              tea, you'll need to drink tea regularly. The main way herbal teas
              improve brain function is by increasing blood flow to the brain,
              thus providing it with nutrients and essential oxygen for a
              healthy mind.
            </p>
            <a href="#">
              Drink This: Thyme, hyssop, Ginger Root Tea, lemon balm
            </a>
          </div>
        </div>
        <div className="about-content" id="about-teas-content">
          <div className="about-content-inside">
            <div className="about-content-inside-teas">
              <h1>Tea Can Help Reduce Pain and Soreness</h1>
              <h1 id="number-content-inside-teas">4</h1>
            </div>

            <p>
              Like the common cold and flu, pain is often treated by
              pharmaceutical drugs, which can have adverse side effects.
              Alternatively, many herbal teas have properties that can help to
              reduce pain without the negative side effects.
            </p>
            <a href="#">Drink This: Ginger Root Tea, melissa, willow herb</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeas;
