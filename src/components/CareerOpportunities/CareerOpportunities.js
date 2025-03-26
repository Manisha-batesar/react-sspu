import React from 'react'
import './CareerOpportunities.css';
import VectorOne from '../../assets/vector1.png'; 
import VectorTwo from '../../assets/Vector2.png';
import healthAndBeauty from '../../assets/logo-1.png';
import handShake from '../../assets/handshake.png';
import face from '../../assets/face_3.png';


const CareerOpportunities = () => {
  return (
    <div className='container'>
      <h2>Career Opportunities and Industry Connections</h2>
 
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
          <p>Partnerships with salons, spas, beauty brands</p>
         </div>
          {/* third content */}
          <div className='leftContent'>
          <img src={face} alt='logoImage'/>
          <p>Partnerships with salons, spas, beauty brands</p>
         </div>

        </div>

        <div className='right'> 
          <img src={VectorOne} alt='logo-image1' className='imageOne'/>
          <img src={VectorTwo} alt='logo-image2' className='imageTwo'/>
        </div>
      </div>
    </div>
  )
}

export default CareerOpportunities