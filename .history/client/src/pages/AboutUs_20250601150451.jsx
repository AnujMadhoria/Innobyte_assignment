import React from 'react';
import useInView from '../hooks/useInView';

const AboutUs = () => {
  const [ref, isVisible] = useInView();

  return (
    <section className=" w-full min-h-screen   overflow-hidden">
      {/* Floating SVG Decoration */}
      <div className=" top-0 left-0 w-96 h-96 bg-green-300 rounded-full opacity-20 blur-3xl animate-pulse-slow z-0" />
      <div className=" bottom-0 right-0 w-96 h-96 bg-lime-200 rounded-full opacity-20 blur-2xl animate-pulse-slow z-0" />

      <div
        ref={ref}
        className={`about-container max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row gap-14 items-center z-10  fade-slide-up ${isVisible ? 'visible' : ''}`}
      >
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
      </div>
    </section>
  );
};

export default AboutUs;
