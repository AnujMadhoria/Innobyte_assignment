import React from 'react';
import { ShieldCheckIcon, ClockIcon, HomeModernIcon, MapIcon } from '@heroicons/react/24/outline';
import useInView from '../hooks/useInView';

const services = [
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-green-600 animate-pulse" />,
    title: 'High Class Security',
  },
  {
    icon: <ClockIcon className="h-8 w-8 text-blue-600 animate-spin-slow" />,
    title: '24 Hours Room Service',
  },
  {
    icon: <HomeModernIcon className="h-8 w-8 text-amber-600 animate-bounce" />,
    title: 'Restaurant',
  },
  {
    icon: <MapIcon className="h-8 w-8 text-red-600 animate-wiggle" />,
    title: 'Tourist Guide Support',
  },
];

const Services = () => {
  const [ref, isVisible] = useInView();
  return (
    <section
    id='services'
     ref={ref}
  className={`fade-slide-up ${isVisible ? 'visible' : ''} mx-auto mb-10 relative min-h-36 flex items-center justify-start px-8 py-16 bg-cover bg-center`}
      
      style={{ backgroundImage: `url('/src/assets/palash.webp')` }}
    >
      <div className="bg-white  shadow-xl p-10 max-w-xl w-full sm:ml-10 lg:ml-20">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-green-800 mb-2 border-b-4 border-green-500 inline-block pb-1">
          SERVICES
        </h2>
        <p className="text-gray-700 tracking-tighter text-md mb-8">Strive Only For The Best.</p>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-4">
              <div>{service.icon}</div>
              <h3 className="text-xl font-medium text-gray-800">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
