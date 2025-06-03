import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card-container">
        {/* Left: Text Content */}
        <div className="text-content">
          <h2>About Us</h2>
          <h1>
            The Best Holidays{' '}
            <span className="highlight">Start Here</span>
          </h1>
          <p>
            Nestled amidst nature’s finest,{' '}
            <span className="bold">Kingsukh Guest House</span> offers an
            escape like no other — surrounded by the majestic Baranti,
            Susunia, and Biharinath hills. Embrace peace, scenic beauty, and
            soul-refreshing experiences.
          </p>
          <p>
            From cozy rooms to delicious homely meals and a lush green
            garden, every moment is curated for comfort and serenity.
            Discover Purulia’s hidden gems with us.
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

        {/* Right: Image */}
        <div className="image-container">
          <img
            src="src/assets/out.jpg"
            alt="Kingsukh Guest House"
            className="image"
          />
          <div className="gradient"></div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;

  .card-container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background-color: #f5f5f5;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 1000px;
    width: 100%;
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
    font-size: 2rem;
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
    margin-bottom: 0.8rem;
    line-height: 1.4;
    word-wrap: break-word;
  }

  .bold {
    font-weight: 600;
    color: #2e7d32;
  }

  .details p {
    font-size: 0.9rem;
    color: #333;
  }

  .image-container {
    flex: 1;
    position: relative;
    overflow: hidden;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  }

  /* Responsive: stack vertically on small screens */
  @media (max-width: 768px) {
    .card-container {
      flex-direction: column;
    }

    .text-content {
      padding: 1rem;
    }

    .text-content h1 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .text-content h1 {
      font-size: 1.2rem;
    }
  }
`;

export default Card;
