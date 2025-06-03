import React from 'react';
import Button from '../components/Button';
import useInView from '../hooks/useInView';
const Home = () => {
    const [ref, isVisible] = useInView();

  return (
    
    <section
      id="home"
      className="h-screen bg-cover bg-center  flex items-center justify-center"
      style={{ backgroundImage: `url('/src/assets/ayodhya.webp')` }}
    >
      <div className="text-left text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold reversing ">
          Welcome to Kingsukh Guest House        .
        </h1>
        <p className="mt-4 text-lg md:text-xl tracking-widest font-medium  {`fade-slide-up ${isVisible ? 'visible' : ''} delay-300  pb-9 pt-1">
          Your peaceful retreat amidst Purulia's hills and dams.
        </p>
        
         <a href="#contact" >
          <Button/>
        </a>
      </div>
    </section>
  );
};

export default Home;

