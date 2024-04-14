import React, { useState, useEffect } from 'react';
import { Card, cardsArray } from './card';
import './Navbar.css';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % cardsArray.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${activeIndex * (100 / cardsArray.length)}%)` }}>
        {cardsArray.map((card, index) => (
          <div key={index} className="slide">
            <Card text="you get angry and defensive instead of staying open and working towards common ground" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
