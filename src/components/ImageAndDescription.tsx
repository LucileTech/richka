import React from "react";

interface ImageAndDescriptionProps {
  titletop: string;
  contenttop: string;
  images: { src: string; alt: string }[];
  sectionIdTop: string;
  sectionIdBottom: string;
  titlebottom: string;
  contentbottom: string;
}

const ImageAndDescription: React.FC<ImageAndDescriptionProps> = ({
  titletop,
  contenttop,
  images,
  sectionIdTop,
  sectionIdBottom,
  titlebottom,
  contentbottom,
}) => {
  return (
    <>
      <div className="about-header" id={sectionIdTop}>
        <h1>{titletop}</h1>
        <p>{contenttop}</p>
      </div>
      <div className="about-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="about-image"
          />
        ))}
      </div>
      <div className="about-header" id={sectionIdBottom}>
        <h1>{titlebottom}</h1>
        <p>{contentbottom}</p>
      </div>
    </>
  );
};

export default ImageAndDescription;
