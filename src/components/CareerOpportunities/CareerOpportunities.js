import React from 'react'
import './CareerOpportunities.css';
import Vector from '../../assets/vector.png'; 
import healthAndBeauty from '../../assets/logo-1.png';
import handShake from '../../assets/handshake.png';
import face from '../../assets/face_3.png';


const CareerOpportunities = () => {
  return (
    <div className='container'>
      <h2>Career Opportunities And Industry Connections</h2>
 
      <div className='careerContainer'>
        <div className='left'>
          {/* first content */}
         <div className='leftContent'>
          <img src={healthAndBeauty} alt='logoImage'/>
          <p>Partnerships with salons, spas, beauty brands</p>
         </div>
         {/* second content */}
         <div className='leftContent'>
          <img src={handShake} alt='logoImage'/>
          <p>Jobs and career paths after graduation</p>
         </div>
          {/* third content */}
          <div className='leftContent'>
          <img src={face} alt='logoImage'/>
          <p>nternship or externship programs</p>
         </div>

        </div>

        <div className='right'> 
          <img src={Vector} alt='logo-image1' className='imageOne'/>
        </div>
      </div>
    </div>
  )
}

export default CareerOpportunities