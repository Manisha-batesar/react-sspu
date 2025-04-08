import React from 'react'
import dummyImage from '../../../assets/image3.png';


const OfferedCourses = ( {image = dummyImage}) => {
  return (
    
    <div className='aboutCourses'>
      <div className='skillContent'>
            <p>Symbiosis Skills & Professional University, in collaboration with
              Enrich Salons & Academy, brings you a world-class Training Academy on campus. Designed as
              per CIDESCO standards, our state-of-the-art labs and live work environment offer hands-on
              learning in Beauty, Wellness, and Aesthetics.</p>
          </div>

        
        <div className='courseImage'>
          <img src={image} alt='courseImage' />
        </div>
        </div>

     
      
    
  )
}

export default OfferedCourses