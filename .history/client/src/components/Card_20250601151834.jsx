import React, { useState } from 'react';
import styled from 'styled-components';

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledWrapper>
      <div
        className={`book ${isOpen ? 'open' : ''}`}
        onClick={toggleCard}
        onTouchEnd={toggleCard}
      >
        <div className="image-container">
          <img
            src="src/assets/out.jpg"
            alt="Kingsukh Guest House"
            className="image"
          />
          <div className="gradient"></div>
        </div>

        <div className="inner">
          <h2>About Us</h2>
          <h1>
            The Best Holidays{' '}
            <span className="highlight">Start Here</span>
          </h1>
          <p>
            Nestled amidst nature’s finest,{' '}
            <span className="bold">Kingsukh Guest House</span> offers an escape
            like no other — surrounded by the majestic Baranti, Susunia, and
            Biharinath hills. Embrace peace, scenic beauty, and soul-refreshing
            experiences.
          </p>
          <p>
            From cozy rooms to delicious homely meals and a lush green garden,
            every moment is curated for comfort and serenity. Discover
            Purulia’s hidden gems with us.
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

        <div className="cover">
          <p>Tap to Open</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;

  .book {
    position: relative;
    border-radius: 10px;
    width: 100%;
    max-width: w-md;
    background-color: #f5f5f5;
    perspective: 1000px;
    overflow: hidden;
    transition: transform 0.5s;
    cursor: pointer;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 250px;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    display: block;
  }

  .gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
    border-radius: 10px;
  }

  .inner {
    padding: 1rem;
    text-align: left;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    overflow-y: auto;
    max-height: 400px;
  }

  .inner h2 {
    text-transform: uppercase;
    font-size: 0.9rem;
    color: #2e7d32;
    margin-bottom: 0.5rem;
  }

  .inner h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
  }

  .highlight {
    background: linear-gradient(90deg, #22c55e, #84cc16);
    -webkit-background-clip: text;
    color: transparent;
  }

  .inner p {
    color: #555;
    margin-bottom: 0.8rem;
    line-height: 1.4;
    word-wrap: break-word;
  }

  .inner .bold {
    font-weight: 600;
    color: #2e7d32;
  }

  .details p {
    font-size: 0.9rem;
    color: #333;
  }

  .cover {
    position: absolute;
    inset: 0;
    background-color: #c8e6c9;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    transition: transform 0.5s;
  }

  .cover p {
    font-size: 1.2rem;
    font-weight: 500;
    color: #2e7d32;
  }

  .book.open .cover {
    transform: rotateY(180deg);
  }

  .book.open .inner {
    transform: rotateY(0deg);
  }

  /* RESPONSIVE STYLES */
  @media (max-width: 768px) {
    .inner h1 {
      font-size: 1.5rem;
    }

    .inner {
      max-height: 300px;
    }
  }

  @media (max-width: 480px) {
    .inner h1 {
      font-size: 1.2rem;
    }

    .cover p {
      font-size: 1rem;
    }
  }
`;

export default Card;
