import React from 'react'
import './CoursesOffered.css';
import studentSalon from '../../assets/image3.png';

const CoursesOffered = () => {
  return (

    <div className='Container'>

      <h2>Courses Offered</h2>

      <div className='courseContainer'>

        <div className='courseContent'>

          <div className='offeredCourses'>
            <span>BSc. Beauty & Wellness</span>
            <span>BSc.Nutritional Sciences & Diabetics</span>
            <span>MSc.Nutritional Sciences & Diabetics</span>
          </div>
          <div className='skillContent'>
            <p>Symbiosis Skills & Professional University, in collaboration with
              Enrich Salons & Academy, brings you a world-class Training Academy on campus. Designed as
              per CIDESCO standards, our state-of-the-art labs and live work environment offer hands-on
              learning in Beauty, Wellness, and Aesthetics.</p>
          </div>

        </div>
        <div className='courseImage'>
          <img src={studentSalon} alt='courseImage' />
        </div>

      </div>
    </div>

  )

}

export default CoursesOffered