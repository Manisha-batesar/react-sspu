import React, { useEffect } from 'react'
import Header from './components/Header'
import Courses from './components/Courses'
import WhyChooseUs from './components/WhyChooseUs'
import './styles.css';

const App = () => {
  return (
    <>
      <Header />
      <Courses />
      <WhyChooseUs />
    </>
  )
}

export default App