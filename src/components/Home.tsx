import React from "react";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img
          src="https://s3-alpha-sig.figma.com/img/890c/0397/f303b5b3c7a6ad38778a2c26c066f025?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MaGBGedf7-EbunXvie6N5A1uwV~hA5A1X0blUnY7cYS5vnjNM1vRFf~afvq5jWBgtTpiCsGHLKzY9nI-httgWWF6L~inMlUFrYM1eZJG35ySqeISfyHwmUAGWOmEcZn8iXNt4I~Pn3uKVDNQ9UDSWmyMxLHgtVXWREUV69AiG5oCNingOMJ2ezr1gbSCUs7fB2JxbyfgzTyyBu88NykhavUtw7dkKYJu-aU0gEQ7DFtWxvZ3FfbFzmEuzUfeZ7VgJvoZfzCkU0G-q9bLeFD8hXXcup7h~nyIUieN31C6LkGAQVqBrJhLlvPN4a6SeMJIAry7604D6kQdQRn6am8BQQ__"
          alt="Wellness Image"
        />
      </div>
      <div className="content-container">
        <div className="title-box">
          <h1 className="title">Wellness at Your Fingertips</h1>
        </div>
        <div className="content">
          <p>
            We’re Richka. We create natural products for your well-being and
            beauty from our own herbs.
          </p>
          <p>
            <a href="#">Shop Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
