import React from "react";
import { Carousel } from "react-bootstrap";

const CustomCarousel = () => {
  const imageSources = [
    "/CustomPics/custom1.jpeg",
    "/CustomPics/custom2.jpeg",
    "/CustomPics/custom3.jpeg",
    "/CustomPics/custom4.jpeg",
    "/CustomPics/custom5.jpeg",
  ];

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={imageSources[0]}
          alt="Custom 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={imageSources[1]}
          alt="Custom 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={imageSources[2]}
          alt="Custom 3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={imageSources[3]}
          alt="Custom 4"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={imageSources[4]}
          alt="Custom 5"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
