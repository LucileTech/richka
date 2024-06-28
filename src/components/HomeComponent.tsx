import React from "react";
import useProgressiveImg from "../hooks/useProgressiveImg";

interface HomeComponentProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  content: React.ReactNode;
}

const HomeComponent: React.FC<HomeComponentProps> = ({
  imgSrc,
  imgAlt,
  title,
  content,
}) => {
  const [src, { blur }] = useProgressiveImg(
    `${imgSrc}?w=20`,
    `${imgSrc}?w=600`
  );

  return (
    <div className="home-container">
      <div className="home-container-left">
        {src && ( // Check if src is defined before rendering the image
          <img
            src={src}
            alt={imgAlt}
            className="image"
            style={{
              width: "100%",
              filter: blur ? "blur(20px)" : "none",
              transition: blur ? "none" : "filter 0.3s ease-out",
            }}
            loading="lazy"
          />
        )}
      </div>
      <div className="home-container-right">
        <div className="title-box">
          <h1>{title}</h1>
        </div>
        <div className="content-home">{content}</div>
      </div>
    </div>
  );
};

export default HomeComponent;
