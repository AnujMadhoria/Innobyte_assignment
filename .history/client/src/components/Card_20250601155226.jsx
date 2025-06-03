import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for fade-slide-up
const fadeSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledWrapper = styled.div`
  /* ... your existing styles ... */

  .fade-slide-up {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .fade-slide-up.visible {
    opacity: 1;
    transform: translateY(0);
    animation: ${fadeSlideUp} 0.5s forwards;
  }
`;

const Card = () => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the card with animation after mount
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateX = (-y / height) * 15;
    const rotateY = (x / width) * 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTransform = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <StyledWrapper className='bg-gray-100 my-10'>
      <div
        className={`card fade-slide-up ${isVisible ? 'visible' : ''}`}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTransform}
      >
        {/* your content */}
        <div className="image-container">
          <img src="src/assets/out.jpg" alt="Kingsukh Guest House" />
          <div className="gradient"></div>
        </div>
        <div className="text-content">
          <h2>About Us</h2>
          <h1>
            The Best Holidays <span className="highlight">Start Here</span>
          </h1>
          <p>
            Nestled amidst nature’s finest,{' '}
            <span className="bold">Kingsukh Guest House</span> offers an escape
            like no other — surrounded by the majestic Baranti, Susunia, and
            Biharinath hills.
          </p>
          <p>
            From cozy rooms to delicious homely meals and a lush green garden,
            every moment is curated for comfort and serenity. Discover Purulia’s
            hidden gems with us.
          </p>
          <div className="details">
            <p>
              <strong>📍 Address:</strong> Beside Barshal Water Tank, Manpur,
              Barhanti, West Bengal 723156
            </p>
            <p>
              <strong>📞 Contact:</strong> +91 9007062180
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Card;
