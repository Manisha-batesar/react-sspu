import React from 'react'
import './CampusTour.css'
import campusImage from '../../assets/image4.png';

const CampusTour = () => {
  return (
    <div className='container'>
     <div className='campusimage'>

      <img src={campusImage} alt='campus'/>
      <div className='campusContent'>
        <div className='leftContent'>
        <p>A breathtaking campus you can’t resist!</p>
        <button type='button'>Book a Campus Tour<span>→</span></button>
        </div>
        <div className='rightContent'>
          <div className='content'>
            <p>100<br/><span>Stats</span></p><hr/>
            <p>100+<br/><span>Stats</span></p><hr/>
            <p>100<br/><span>Stats</span></p>
          </div>
        </div>
      </div>
     </div>

    </div>
  )
}

export default CampusTour