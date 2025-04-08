import React from 'react'
import './Footer.css'
import formImage from '../../assets/formImage.jpg'
import logoImage from '../../assets/icon1.png'

const Footer = () => {
  return (

    <div className='ApplyNowContainer'>
      <img src={formImage} alt='formImage' className='footer-bg-image' />
      <div className='footer-backdrop' />

      <div className='footer-content'>
        <div className='enquiryDivision'>
          <div className='footer-logo'>
            <img src={logoImage} alt='footer logo sspu' />
          </div>
          <p>sspu@gmail.com</p>
          <div className='general-inquiry'>
            <h4>For general enquiry</h4>
            <ul>
              <li>02027187768</li>
              <li>7796638369</li>
              <li>7796695604</li>
            </ul>
          </div>


          <div className='sspu-Directions'>
            <h4>SSPU Directions</h4>
            <p>SSPU Kiwale, adjoining Pune-Mumbai <br />Expressway, Pune- 412 101</p>
          </div>
        </div>



        <div className='contentDivision'>
          <div className='contact-us'>
            <h4>Contact</h4>
            <p>For Reception</p>
            <ul>
              <li>02027187768</li>
            </ul>
            <h6>For New Admission Enquiry</h6>
            <ul>
              <li>02027187768</li>
              <li>7796638369</li>
              <li>7796695604</li>
            </ul>
          </div>
        </div>



        <div className='psychologicalDivision'>
          <div className='counsellor-detailss'>
            <h4>PsyCHological Counsellor Details</h4>
            <p>Timings: 9 am to 5 pm;
              Monday, Wednesday and Friday</p>
            <h6>Location: Health Center, SSPU Kiwale</h6>
            <p>Campus Tour</p>
            <p>See on Map</p>
          </div>
        </div>
       
      </div>

      <p className='copyRight'>&copy; 2025 My Website. All rights reserved.</p>
    </div>
   
     
  )
}

export default Footer


