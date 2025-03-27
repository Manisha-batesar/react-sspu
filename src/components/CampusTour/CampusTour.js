import React from 'react'
import './CampusTour.css'
import campusImage from '../../assets/image4.png';

const CampusTour = () => {
  return (
    <div className='container'>
     <div className='campusimage'>

      <img src={campusImage} alt='campus'/>
      <div className='campusContent'>
        <p>A breathtaking campus you can’t resist!</p>
        <button type='button'>Book a Campus Tour<span>→</span></button>
      </div>
     </div>

    </div>
  )
}

export default CampusTour