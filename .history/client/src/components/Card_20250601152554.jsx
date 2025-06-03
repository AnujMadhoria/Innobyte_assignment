import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Card = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the card is in view
      const scrollProgress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);

      // Apply a subtle rotation based on scroll
      const rotateY = scrollProgress * 15; // max 15deg

      cardRef.current.style.transform = `rotateY(${rotateY}deg)`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledWrapper>
      <div className="card" ref={cardRef}>
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
            Susunia, and Biharinath hills.
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

        <div className="image-container">
          <img
            src="src/assets/out.jpg"
            alt="Kingsukh Guest House"
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

  .card {
    width: 90%;
    max-width: 1000px;
    background-color: whitesmoke;
    border-radius: 10px;
    box-shadow: 1px 1px 15px rgba(0,0,0,0.2);
    display: flex;
    overflow: hidden;
    transition: transform 0.3s ease;
    will-change: transform;
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

  @media (max-width: 768px) {
    .card {
      flex-direction: column;
      transform: none !important; /* remove 3D rotation on small screens */
    }

    .image-container,
    .text-content {
      width: 100%;
    }
  }
`;

export default Card;
