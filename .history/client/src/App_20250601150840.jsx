import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Rooms from './pages/Rooms';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Card from './components/Card';


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <Rooms />
      <Gallery />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;
