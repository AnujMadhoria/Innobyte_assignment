import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Card = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollProgress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);

      // Increase rotation and also add rotateX for depth
      const rotateY = (scrollProgress - 0.5) * 30; // -15deg to 15deg
      const rotateX = (scrollProgress - 0.5) * -15; // 7.5deg to -7.5deg

      cardRef.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledWrapper>
      <div className="card-container">
        <div className="card" ref={cardRef}>
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
          <div className="image-container">
            <img
              src="src/assets/out.jpg"
              alt="Kingsukh Guest House"
            />
            <div className="gradient"></div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 2rem;
  perspective: 1000px; /* 3D perspective! */

  .card-container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .card {
    display: flex;
    background: #f5f5f5;
    border-radius: 10px;
    box-shadow: 1px 1px 20px rgba(0,0,0,0.2);
    overflow: hidden;
    transition: transform 0.3s ease;
    will-change: transform;
    transform-style: preserve-3d; /* IMPORTANT for 3D! */
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
      transform: none !important; /* no rotation on small screens */
    }
  }
`;

export default Card;
