import React, { useRef } from 'react';
import styled from 'styled-components';

const Card = () => {
  const cardRef = useRef(null);

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
    <StyledWrapper className=' bg-gray-100'>
      <div
        className="card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTransform}
      >
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

const StyledWrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;

  .card {
    width: 80%;
    max-width: 1000px;
    display: flex;
    background: #f5f5f5;
    border-radius: 10px;
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: transform 0.2s ease;
    transform-style: preserve-3d;
    will-change: transform;
  }

  .image-container {
    flex: 1;
    position: relative;
    overflow: hidden;
    min-height: 300px;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  }

  .text-content {
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text-content h2 {
    text-transform: uppercase;
    color: #2e7d32;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .text-content h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
  }

  .highlight {
    background: linear-gradient(90deg, #22c55e, #84cc16);
    -webkit-background-clip: text;
    color: transparent;
  }

  .text-content p {
    color: #555;
    margin-bottom: 0.7rem;
    line-height: 1.4;
  }

  .bold {
    font-weight: 600;
    color: #2e7d32;
  }

  .details p {
    font-size: 0.9rem;
    color: #333;
  }

  /* Mobile styling */
  @media (max-width: 768px) {
    .card {
      flex-direction: column;
      transform: none !important;
      box-shadow: none;
      width: 100%;
    }

    .image-container {
      min-height: 200px;
    }

    .text-content {
      padding: 1rem;
    }

    .text-content h1 {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
    }

    .text-content p {
      font-size: 0.95rem;
      margin-bottom: 0.6rem;
    }

    .details p {
      font-size: 0.85rem;
    }
  }
`;

export default Card;
