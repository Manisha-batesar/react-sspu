import React from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import './styles/global.css';
import Testimonial from './components/Testimonial/Testimonial';

const App = () => (
  <>
    <Header />
    <Courses />
    <WhyChooseUs />
    <Testimonial />
  </>
);

export default App;
