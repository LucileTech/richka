import React from "react";
import CenteredParagraph from "../ImageAndDescription";
import { getAssetPath } from "../../utils/getAssetPath";

const TeasDescription: React.FC = () => {
  const teaHistoryContent = `A lot of us remember our childhood summer holidays at grandparents’ village house. 
    With a forest, river and pond nearby. Every national holiday, according to the season, most of families had a tea ceremony. 
    For example on Trinity, Ukrainians have tradition of decorating the home with greenery, which is believed to protect against evil spirits. 
    So people collect thyme, cornflowers and wild herbs and brew it then. In winter or early spring, when the snow had not yet melted, they 
    enjoyed fruit teas or raspberry buds and small chopped sprigs of wild and cultivated cherries. Such teas used to be common in every rural 
    home. Any gatherings with tea, both with friends and in the family circle, began with tea.`;

  const teaBenefitsContent = `It's no secret that tea is a popular selection for individuals who want to improve their health naturally. 
    Unlike coffee and standard teas, most herbal teas are caffeine-free. They also feature nutrients, vitamins, minerals and antioxidants 
    that vary depending on the herbal blend. Typical health benefits from drinking herbal tea include relaxation, pain reduction and the 
    improvement of body systems such as digestive and immune. Here are the top health benefits and the herbal teas that you should consume 
    to get them.`;

  const teaImages = [
    {
      src: getAssetPath("/photographs/teaspageflowers.jpeg"),
      alt: "Tea Image",
    },
    { src: getAssetPath("/photographs/teaspagetea.jpeg"), alt: "Tea Image" },
  ];

  return (
    <>
      <CenteredParagraph
        titletop="a little bit of history..."
        contenttop={teaHistoryContent}
        images={teaImages}
        titlebottom="What are the benefits of drinking herbal teas?"
        contentbottom={teaBenefitsContent}
        sectionIdTop="teas-section-top"
        sectionIdBottom="teas-section-bottom"
      />
    </>
  );
};

export default TeasDescription;
