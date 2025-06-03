import React from 'react';
import useInView from '../hooks/useInView';

const AboutUs = () => {
  const [ref, isVisible] = useInView();

  return (
    <section className=" w-full min-h-screen   overflow-hidden">
     

      <div
        ref={ref}
        className={`about-container max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row gap-14 items-center z-10  fade-slide-up ${isVisible ? 'visible' : ''}`}
      >
        
        
      </div>
    </section>
  );
};

export default AboutUs;
