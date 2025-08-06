import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Properties from '../components/Properties';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
const HomePage = () => {
  return <main>
      <Hero />
      <Services />
      <About />
      <Properties />
      <Testimonials />
      <Contact />
    </main>;
};
export default HomePage;