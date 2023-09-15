// ShopCarousel.js
import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import ShopItem from "./Display4";

const ShopCarousel = ({ items }) => {
  const [availability, setAvailability] = useState(
    Array(items.length).fill(true)
  );

  const handlePurchase = (index) => {
    const newAvailability = [...availability];
    newAvailability[index] = false;
    setAvailability(newAvailability);
  };

  return (
    <Carousel>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <ShopItem
            label={item.label}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
          />
          {availability[index] ? (
            <Button variant="primary" onClick={() => handlePurchase(index)}>
              Purchase
            </Button>
          ) : (
            <Button variant="secondary" disabled>
              Unavailable
            </Button>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ShopCarousel;
