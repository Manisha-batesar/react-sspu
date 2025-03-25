import React from 'react'
import personRaisedHand from '../assets/logo-4.png';
import jobLogo from '../assets/logo-5.png';
import SchoolLogo from '../assets/logo-3.png';
import toolBox from '../assets/logo-6.png';
import timeLogo from '../assets/logo-7.png';
import schoolLogo from '../assets/logo-8.png';

const WhyChooseUs = () => {
  const logos = [
    { img: personRaisedHand, title: "Expert Faculty" },
    { img: jobLogo, title: "Job Placement" },
    { img: SchoolLogo, title: "Modern Facilities" },
    { img: toolBox, title: "Practical Training" },
    { img: timeLogo, title: "Flexible Schedule" },
    { img: schoolLogo, title: "Industry Partners" }
  ];

  return (
    <div>
      <div className="why-choose-us">
        <div className="why-choose-us-content">
          <h2>Why Choose Us ?</h2>
          <p>Choose Symbiosis Skills & Professional
            University for industry-aligned programs, expert faculty with global experience, state-of-the-art
            labs, and hands-on training that prepares you for a successful career in the rapidly growing
            nutrition and wellness sector.</p>
          
          <div className="logo-grid">
            {logos.map((logo, index) => (
              <div key={index} className="logo-item">
                <img src={logo.img} alt={logo.title} />
                <h4>{logo.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs

