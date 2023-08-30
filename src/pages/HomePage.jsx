import React from 'react';
import Hero from '../components/Hero';
import Subscribe from '../components/Subscribe';
import Partners from '../components/Partners';
import About from '../components/About';
import Testimonial from '../components/Testimonial';
import Articles from '../components/Articles';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <About />
      <Testimonial />
      <Articles />
      <Subscribe />
    </div>
  );
};

export default HomePage;
