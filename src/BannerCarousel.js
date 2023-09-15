import React, { useState, useEffect } from "react";
import "./App.css"; // Import the App.css file

const BannerCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [1, 2, 3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-carousel">
      <img
        src={`/Bannerpics/banner${currentImageIndex + 1}.jpeg`}
        alt={`Banner ${currentImageIndex + 1}`}
        className="banner-image active img-fluid"
      />
    </div>
  );
};

export default BannerCarousel;
