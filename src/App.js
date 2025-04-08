import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import './styles/global.css';
import Testimonial from './components/Testimonial/Testimonial';
import CouesesOffered from './components/CoursesOffered/CoursesOffered';
import CareerOpportunities from './components/CareerOpportunities/CareerOpportunities';
import CampusTour from './components/CampusTour/CampusTour';
import AdmissionProcess from './components/AdmissionProcess/AdmissionProcess';
import Scholarship from './components/Scholarship/Scholarship';
import Footer from './components/Footer/Footer';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import AdmissionForm from './components/AdmissionForm/AdmissionForm';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };


  return (
  <>
    <Header toggleApplyForm={toggleForm}/>
    <Courses />
    <WhyChooseUs />
    <Testimonial />
   <CouesesOffered />
   <CareerOpportunities />
   <CampusTour />
   <AdmissionProcess />
   <Scholarship />
   <FrequentlyAskedQuestions />
   <Footer />
   <AdmissionForm showForm={showForm} toggleForm={toggleForm}/>
  </>
)};

export default App;
