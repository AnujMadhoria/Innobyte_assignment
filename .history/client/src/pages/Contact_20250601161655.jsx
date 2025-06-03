import React from 'react';
import useInView from '../hooks/useInView';

const Contact = () => {
  const [ref, isVisible] = useInView();
  return (
    <section id="contact" className="py-16  bg-gradient-to-br from-green-50 to-white">
      <div   ref={ref}
  className={`fade-slide-up ${isVisible ? 'visible' : ''} max-w-5xl mx-auto text-center mb-10`}>
        <h2 className="text-3xl font-bold text-green-800 mb-2">Contact Us</h2>
        <p className="text-gray-600 text-sm">We'd love to hear from you! Reach out to us anytime.</p>
      </div>

      <div ref={ref}
  className={`fade-slide-up ${isVisible ? 'visible' : ''} max-w-5xl mx-auto  mb-10 overflow-hidden shadow-2xl border border-white/30 bg-white/20 backdrop-blur-xl flex flex-col md:flex-row transition-all duration-300`} >

        {/* Contact Info */}
        <div className="md:w-1/2 p-8 bg-green-100/30 backdrop-blur-md border-r border-white/30 space-y-6 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="bg-green-200 p-3 rounded-full shadow-md">📍</div>
              <div>
                <h4 className="text-md font-semibold text-green-700">Address</h4>
                <p className="text-gray-700 text-sm">Near Baranti Lake, Purulia, West Bengal</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-200 p-3 rounded-full shadow-md">📞</div>
              <div>
                <h4 className="text-md font-semibold text-green-700">Phone</h4>
                <p className="text-gray-700 text-sm">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-200 p-3 rounded-full shadow-md">✉️</div>
              <div>
                <h4 className="text-md font-semibold text-green-700">Email</h4>
                <p className="text-gray-700 text-sm">kingsukhguesthouse@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-green-700 bg-white p-2 rounded-full shadow hover:scale-110 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.07C22 6.55 17.52 2 12 2S2 6.55 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.22c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22C18.34 21.25 22 17.09 22 12.07z" />
              </svg>
            </a>
            <a href="#" className="text-pink-600 bg-white p-2 rounded-full shadow hover:scale-110 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6.01 4.9.07 1.2.06 2 .26 2.5.55.5.3.9.7 1.2 1.2.3.5.5 1.3.6 2.5.05 1.3.06 1.7.06 4.9s-.01 3.6-.07 4.9c-.06 1.2-.26 2-.55 2.5-.3.5-.7.9-1.2 1.2-.5.3-1.3.5-2.5.6-1.3.05-1.7.06-4.9.06s-3.6-.01-4.9-.07c-1.2-.06-2-.26-2.5-.55-.5-.3-.9-.7-1.2-1.2-.3-.5-.5-1.3-.6-2.5-.05-1.3-.06-1.7-.06-4.9s.01-3.6.07-4.9c.06-1.2.26-2 .55-2.5.3-.5.7-.9 1.2-1.2.5-.3 1.3-.5 2.5-.6 1.3-.05 1.7-.06 4.9-.06zM12 0C8.7 0 8.3.01 7.1.07 5.8.13 4.7.36 3.8.8c-.9.4-1.7 1.1-2.2 2.1-.4.9-.7 2.1-.8 3.3C.01 8.3 0 8.7 0 12s.01 3.7.07 4.9c.06 1.2.3 2.3.8 3.3.4.9 1.1 1.7 2.1 2.2.9.4 2.1.7 3.3.8 1.2.06 1.6.07 4.9.07s3.7-.01 4.9-.07c1.2-.06 2.3-.3 3.3-.8.9-.4 1.7-1.1 2.2-2.1.4-.9.7-2.1.8-3.3.06-1.2.07-1.6.07-4.9s-.01-3.7-.07-4.9c-.06-1.2-.3-2.3-.8-3.3-.4-.9-1.1-1.7-2.1-2.2-.9-.4-2.1-.7-3.3-.8C15.7.01 15.3 0 12 0z" />
                <path d="M12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.6a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
              </svg>
            </a>
            <a href="#" className="text-blue-500 bg-white p-2 rounded-full shadow hover:scale-110 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.36 8.6 8.6 0 01-2.72 1.03A4.28 4.28 0 0016.1 4c-2.37 0-4.29 1.93-4.29 4.29 0 .34.04.68.11 1A12.16 12.16 0 013 5.09a4.27 4.27 0 001.33 5.71 4.27 4.27 0 01-1.94-.54v.06c0 2.1 1.49 3.85 3.47 4.24a4.29 4.29 0 01-1.93.07c.54 1.68 2.09 2.9 3.93 2.94A8.6 8.6 0 012 19.54a12.16 12.16 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56c.84-.61 1.57-1.36 2.14-2.22z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="md:w-1/2 p-8 space-y-4 bg-white/30  backdrop-blur-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3  bg-white/70 border-b border-green-500  focus:outline-none "
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3  bg-white/70 border-b border-green-500  focus:outline-none "
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3  bg-white/70 border-b border-green-500  focus:outline-none "
            required
          ></textarea>
          <!-- From Uiverse.io by Rahulcheryala --> 
<button
  type="button"
  class="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold border-4 border-white group"
>
  <div
    class="bg-green-400 rounded-xl h-12 w-1/4 grid place-items-center absolute left-0 top-0 group-hover:w-full z-10 duration-500"
  >
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#000000"
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
      ></path>
      <path
        fill="#000000"
        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
      ></path>
    </svg>
  </div>
  <p class="translate-x-4">Send</p>
</button>

        </form>
      </div>

      {/* Map Section */}
      <div className="mt-14 w-full  overflow-hidden  border border-green-200">
        <iframe
          title="Kingsukh Guest House Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.2763761611066!2d86.7569445!3d23.5229531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f76537bfb8b2e7%3A0xf8c0f8b44767cbd9!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1580912345678!5m2!1sen!2sin"
          className="w-full h-[350px]"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
