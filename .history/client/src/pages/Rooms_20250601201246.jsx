import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import useInView from '../hooks/useInView';
import Button from '../components/Button';

const rooms = [
  {
    name: "Deluxe Room",
    price: "₹2,500 / night",
    features: ["AC", "Queen Bed", "Private Balcony", "Wi-Fi"],
    image: "/src/assets/room1.jpg",
  },
  {
    name: "Standard Room",
    price: "₹1,800 / night",
    features: ["Fan", "Double Bed", "TV", "Room Service"],
    image: "/src/assets/small.jpg",
  },
  {
    name: "Family Suite",
    price: "₹3,500 / night",
    features: ["2 Beds", "AC", "Attached Bathroom", "Garden View"],
    image: "/src/assets/large.jpg",
  },
];

const RoomCard = ({ room }) => (
  <div id='rooms' className="
    bg-white shadow-md overflow-hidden w-[300px] sm:w-[340px] 
    transition-transform duration-300 
    hover:scale-105 
    hidden md:block
  ">
    <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold text-green-900">{room.name}</h3>
      <p className="text-green-700 mb-2">{room.price}</p>
      <ul className="text-sm text-gray-600 mb-4 space-y-1">
        {room.features.map((feature, i) => (
          <li key={i}>• {feature}</li>
        ))}
      </ul>
       <a href='#contact'  >
                    <Button/>
                   </a>
    </div>
  </div>
);

const RoomSlider = () => {
  const [ref, isVisible] = useInView();
  return (
    <div id='rooms' ref={ref} className={`fade-slide-up ${isVisible ? 'visible' : ''} py-10 bg-gray-100`}>
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Our Rooms</h2>

      {/* Mobile: Infinite Centered Slider */}
      <div className="block md:hidden">
        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          className="px-4"
        >
          {rooms.map((room, index) => (
            <SwiperSlide key={index} className="w-[300px] sm:w-[340px]">
              <div className="bg-white shadow-md overflow-hidden w-[300px] sm:w-[340px]">
                <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-green-900">{room.name}</h3>
                  <p className="text-green-700 mb-2">{room.price}</p>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    {room.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                
                    <a href='#contact'  >
                    
                   </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop: Static Grid with Hover Zoom */}
      <div className="hidden md:flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default RoomSlider;
