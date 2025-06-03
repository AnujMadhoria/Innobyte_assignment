import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Card = () => {
  const bookRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('open');
          } else {
            entry.target.classList.remove('open');
          }
        });
      },
      {
        threshold: 0.2, // adjust how much of the element should be visible to trigger
      }
    );

    if (bookRef.current) {
      observer.observe(bookRef.current);
    }

    return () => {
      if (bookRef.current) {
        observer.unobserve(bookRef.current);
      }
    };
  }, []);

  return (
    <StyledWrapper>
      <div className="book" ref={bookRef}>
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

        <div className="cover">
          <p className="text">Scroll to open</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;

  .book {
    position: relative;
    width: 580px;
    height: 450px;
    background-color: whitesmoke;
    border-radius: 10px;
    box-shadow: 1px 1px 12px #000;
    perspective: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s;
  }

  .cover,
  .inner,
  .image-container {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 1px 1px 12px #000;
    transition: all 0.5s;
    transform-origin: 0;
    cursor: pointer;
  }

  .cover {
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inner {
    background-color: white;
    transform-origin: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    overflow-y: auto;
  }

  .image-container {
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

  /* 3D animation on scroll */
  .book.open .cover {
    transform: rotateY(-70deg);
  }

  .book.open .inner {
    transform: rotateZ(25deg) rotateX(-30deg) rotateY(-10deg) translateX(140px);
    box-shadow: 1px 1px 20px #000a;
  }

  .book.open {
    transform: rotateZ(-10deg);
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

  .inner p {
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

  @media (max-width: 768px) {
    .book {
      width: 100%;
      height: auto;
      flex-direction: column;
    }

    .inner {
      padding: 1rem;
    }

    .text-content h1 {
      font-size: 1.5rem;
    }

    .book.open .inner {
      transform: rotateY(0) rotateX(0) rotateZ(0) translateX(0);
      box-shadow: none;
    }

    .book.open .cover {
      transform: rotateY(0);
    }

    .book.open {
      transform: none;
    }
  }
`;

export default Card;
