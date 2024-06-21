import React from "react";

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
  return (
    <div className="home-container">
      <div className="home-container-left">
        <img src={imgSrc} alt={imgAlt} className="image" />
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
