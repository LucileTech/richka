import React from "react";
import CenteredParagraph from "../ImageAndDescription";
import { getAssetPath } from "../../utils/getAssetPath";

const OilsDescription: React.FC = () => {
  const oilHistoryContent = `When you open a bottle of pure, unadulterated essential oil, your senses are instantly filled with its potent aroma, even from a distance. What your nose detects are the naturally occurring elements of the essential oil.
Every essential oil varies in its natural makeup, so aromas and benefits are also unique. For example, Lavender oil includes elements that make it effective for soothing skin irritations, and promoting a restful environment for sleep.
Meanwhile, Sage essential oil is an powerfull immune stimulant. It is used to fight infections (such as colds) and germs. Cure  bronchitis and influenza and dental abscesses.

`;

  const oilBenefitsContent = `What are essential oils good for? Well, have you ever felt instantly calmed by the smell of hot tea or inhaled the restorative air in a forest? That's the power of aromatherapy. For centuries, plant extracts and aromatherapy have been used in traditional and naturopathic medicine to support health and promote healing. There are numerous studies about the effectiveness of essential oils on the body and mind. Interestingly, modern science is just beginning to identify and demonstrate the specific chemical pathways that enable some essential oils to achieve their effects.`;

  const oilImages = [
    { src: getAssetPath("/photographs/oilpagehands.jpeg"), alt: "Oil Image" },
    { src: getAssetPath("/photographs/oilpagecandle.jpeg"), alt: "Oil Image" },
  ];

  return (
    <>
      <CenteredParagraph
        titletop="Essential oils are the vibrant essences of plant parts that can have a powerful effect on health and well-being"
        contenttop={oilHistoryContent}
        images={oilImages}
        titlebottom="Why are essential oils important? "
        contentbottom={oilBenefitsContent}
        sectionIdTop="teas-section-top"
        sectionIdBottom="teas-section-bottom"
      />
    </>
  );
};

export default OilsDescription;
