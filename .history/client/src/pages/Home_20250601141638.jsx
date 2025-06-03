import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('/src/assets/ayodhya.webp')` }}
    >
      <div className="text-left text-white px-4 max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold reversing animate-fadeSlideUp">
          Welcome to Kingsukh Guest House.
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-xl font-medium animate-fadeSlideUp delay-300">
          Your peaceful retreat amidst Purulia's hills and dams.
        </p>
        <a
          href="#contact"
          className="inline-block bg-yellow-400 mt-6 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
        >
          Book Now
        </a>
      </div>
    </section>
  );
};

export default Home;
