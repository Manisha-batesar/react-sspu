import React from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import './styles/global.css';
import Testimonial from './components/Testimonial/Testimonial';
import CouesesOffered from './components/CoursesOffered/CoursesOffered';
import CareerOpportunities from './components/CareerOpportunities/CareerOpportunities';
import CampusTour from './components/CampusTour/CampusTour';
import AdmissionProcess from './components/AdmissionProcess/AdmissionProcess';

const App = () => (
  <>
    <Header />
    <Courses />
    <WhyChooseUs />
    <Testimonial />
   <CouesesOffered />
   <CareerOpportunities />
   <CampusTour />
   <AdmissionProcess />
  </>
);

export default App;
