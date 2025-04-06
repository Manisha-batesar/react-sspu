import React from 'react'
import './CampusTour.css'
import campusImage from '../../assets/image4.png';

const CampusTour = () => {
  return (
    <>
      <div className='container'>
        <div className='campusimage'>
          <img src={campusImage} alt='campus' />
          <div className='campus-tour-content'>
            <p>A breathtaking campus you can’t resist!</p>
            <button type='button'>Book a Campus Tour<span>→</span></button>
          </div>
        </div>
      </div>
      <div className='campus-stats'>
        <p>100<br /><span>Stats</span></p><hr />
        <p>100+<br /><span>Stats</span></p><hr />
        <p>100<br /><span>Stats</span></p>
      </div>
    </>

  )
}

export default CampusTour