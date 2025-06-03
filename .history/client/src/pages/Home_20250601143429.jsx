import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center  flex items-center justify-center"
      style={{ backgroundImage: `url('/src/assets/ayodhya.webp')` }}
    >
      <div className="text-left text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold reversing animate-fadeSlideUp">
          Welcome to Kingsukh Guest House        .
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-medium  animate-fadeSlideUp delay-300 py-2.5">
          Your peaceful retreat amidst Purulia's hills and dams.
        </p>
         <a href="#contact" className="inline-block bg-yellow-400 mt-6 text-black px-6 py-3  font-semibold hover:bg-yellow-500">
          Book Now
        </a>
      </div>
    </section>
  );
};

export default Home;

