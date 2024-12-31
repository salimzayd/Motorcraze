import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Brands from './pages/Brands';
import Scrollbar from './pages/scroll';
import Cards from './pages/Cards';
import Location from './pages/Navigation';
import Scrollef from './pages/Slide';
import Testimonial from './pages/Testimonial';
import Footer from './components/Footer';
import MouseTrailEffect from './pages/Mouseeffect';


function App() {
  return (
    <>
      <MouseTrailEffect />
       <Navbar />
       <Home />
      <Brands /> 
      <Scrollef />
      <Cards />
      <Testimonial />
      <Location />
      <Footer />
      
    
    </>
  );
}

export default App;
