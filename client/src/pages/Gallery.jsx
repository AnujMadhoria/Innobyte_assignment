import React, { useState } from 'react';
import useInView from '../hooks/useInView';

const images = [
  '/src/assets/baranti.webp',
  '/src/assets/large.jpg',
  '/src/assets/out.jpg',
  '/src/assets/palash.webp',
  '/src/assets/room1.jpg',
  '/src/assets/service.jpg',
  '/src/assets/small.jpg',
  '/src/assets/ayodhya.webp',
  '/src/assets/mithonDam.webp',
  '/src/assets/flower.jpg',
];

const Gallery = () => {
  const [ref, isVisible] = useInView();
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section id="gallery"  ref={ref}
  className={`fade-slide-up ${isVisible ? 'visible' : ''} py-20 bg-white relative`} >
      <div className="max-w-6xl mx-auto text-center ">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700">Our Gallery</h2>
        <p className="text-gray-500 mt-2">Experience the beauty of our guest house</p>
      </div>

      <div className="overflow-hidden p-5 space-y-8 group cursor-pointer">
        {/* Top strip */}
        <div className="flex gap-6 w-max animate-scroll-left group-hover:paused">
          {[...images, ...images].map((src, index) => (
            <img
              key={`top-${index}`}
              src={src}
              alt={`Gallery Top ${index}`}
              className="w-[400px] h-[250px] object-cover shadow-md hover:scale-105 transition-transform duration-300"
              onClick={() => setLightboxImage(src)}
            />
          ))}
        </div>

        {/* Bottom strip */}
        <div className="flex gap-6 w-max animate-scroll-right group-hover:paused">
          {[...images, ...images].map((src, index) => (
            <img
              key={`bottom-${index}`}
              src={src}
              alt={`Gallery Bottom ${index}`}
              className="w-[300px] h-[200px] object-cover  shadow-md hover:scale-105 transition-transform duration-300"
              onClick={() => setLightboxImage(src)}
            />
          ))}
        </div>
      </div>

      {/* ✅ Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="Enlarged View"
            className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-2xl border-4 border-white"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
