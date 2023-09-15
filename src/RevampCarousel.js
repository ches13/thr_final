import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

const RevampCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageSources = ["/RevampPics/revamp1.jpeg", "/RevampPics/revamp2.jpeg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % imageSources.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={imageSources[0]} alt="Revamp 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imageSources[1]} alt="Revamp 2" />
      </Carousel.Item>
    </Carousel>
  );
};

export default RevampCarousel;
