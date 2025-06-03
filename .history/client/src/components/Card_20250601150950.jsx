import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="book">
        {/* Right: Full-height Image */}
        <div className="w-full md:w-1/2  rounded-xl shadow-xl overflow-hidden animate-zoom-in">
          <img
            src="src/assets/out.jpg"
            alt="Kingsukh Guest House"
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-105"
          />
          {/* Gradient overlay on image */}
          <div className=" inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
        </div>
        <div className="inner">
          {/* Left: Text Content */}
        <div className="w-full md:w-1/2 space-y-6 animate-fade-in-up delay-200">
          <h2 className="text-lg text-green-800 tracking-wider uppercase animate-slide-in-top">About Us</h2>
          <h1 className="text-5xl font-bold leading-tight text-gray-800">
            The Best Holidays <span className="bg-gradient-to-r from-green-500 to-lime-500 text-transparent bg-clip-text">Start Here</span>
          </h1>

          <p className="text-gray-700  leading-relaxed  text-lg animate-fade-in-up delay-300 ">
            Nestled amidst nature’s finest, <span className="font-semibold  text-green-700">Kingsukh Guest House</span> offers an escape like no other — surrounded by the majestic Baranti, Susunia, and Biharinath hills.
            Embrace peace, scenic beauty, and soul-refreshing experiences.
          </p>

          <p className="text-gray-700 text-lg animate-fade-in-up delay-400">
            From cozy rooms to delicious homely meals and a lush green garden, every moment is curated for comfort and serenity. Discover Purulia’s hidden gems with us.
          </p>

          <div className="pt-4 text-gray-800 space-y-1 animate-fade-in-up delay-500">
            <p><strong>📍 Address:</strong> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
            <p><strong>📞 Contact Us:</strong> +91 9007062180</p>
          </div>
        </div>

        </div>
        <div className="cover">
          <p className="text">Hover Me</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .book {
    position: relative;
    border-radius: 10px;
    width: 180px;
    height: 250px;
    background-color: whitesmoke;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    -webkit-transform: preserve-3d;
    -ms-transform: preserve-3d;
    transform: preserve-3d;
    -webkit-perspective: 2000px;
    perspective: 600px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #000;
    transition-duration: 0.5s;
  }

  .cover,
  .inner {
    top: 0;
    position: absolute;
    background-color: lightgray;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform-origin: 0;
    -ms-transform-origin: 0;
    transform-origin: 0;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .book:hover .cover {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: rotatey(70deg);
    -ms-transform: rotatey(70deg);
    transform: rotatey(-70deg);
  }

  .inner {
    transform-origin: 100%;
  }
  .book:hover .inner {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: rotateZ(25deg) rotateX(-30deg) rotateY(-10deg)
      translateX(140px);
    -ms-transform: rotateZ(25deg) rotateX(-30deg) rotateY(-10deg)
      translateX(140px);
    transform: rotateZ(25deg) rotateX(-30deg) rotateY(-10deg) translateX(140px);
    -webkit-box-shadow: 1px 1px 20px #000a;
    box-shadow: 1px 1px 20px #000a;
  }

  .book:hover {
    transform: rotateZ(-10deg);
  }
  .text {
    font-size: 20px;
    font-weight: 100;
  }`;

export default Card;
