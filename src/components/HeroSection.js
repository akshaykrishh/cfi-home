import React, { Component, useState } from "react";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import "./HeroSection.css";

function HeroSection() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        pause={false}
        interval={3000}
        touch={true}
        className="hero-container"
        controls={false}
        indicators={false}
      >
        <Carousel.Item className="carousel">
          <img
            className="d-block w-100 carousel-img"
            src={require("../assets/drone.jpg")}
            alt="First slide"
          />
        </Carousel.Item>{" "}
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={require("../assets/plane.jpg")}
            alt="Second slide"
          />
        </Carousel.Item>{" "}
      </Carousel>
      <div className="slider-txt-bx animate__animated animate__fadeInLeft">
        <h6> WELCOME TO </h6>{" "}
        <h2>
          {" "}
          India 's largest <br />
          student run <br />
          technical lab{" "}
        </h2>{" "}
        {/* <p>The Centre for Innovation (CFI) was setup in 2008 through a donation by the batch of 1981 as the first-of-its kind, 24x7 student laboratory in India. CFI is where ideas are generated, prototypes are built and products are developed. Ten years since its inception, CFI has given rise to hundreds of projects and more than a dozen patents and start-ups, in addition to both national and international accolades.</p> */}
      </div>{" "}
    </>
  );
}

export default HeroSection;
