import React from 'react'
import './Scholarship.css'
import scholarshipImage from '../../assets/image5.png'
import galleryImage1 from '../../assets/image6.png'
import galleryImage2 from '../../assets/image7.png'



const Scholarship = () => {
  return (
    <div className='scholarshipContainer'>
      {/* main heading */}
      <div className='mainHeading'>
        <h2>Financial Aid and Scholarships </h2>
      </div>

     {/* main content */}
     <div className='mainContent'>
      <div className='left'>
        <p>Attractive Scholarship for both National and International Students.<br/> We are ranked 1st in Skill University Category of NIRF Ranking 2024</p>
      </div>

      <div className='right'>
      <button type='button' className='btnContent'>Apply For Scholarship<span>→</span></button>
      </div>
     </div>

     <div className='imageContainer'>
      <img src={scholarshipImage} alt='Scholarship' />
     </div>

    {/* scholarship gallery */}

    <div className='Gallery'>
      <div className='galleryHeading'>
        <h1>Gallery</h1>
      </div>

      <div className='galleryImages'>
        <img src={galleryImage1} alt='Scholarship' />
        <img src={galleryImage2} alt='Scholarship' />
        <img src={galleryImage1} alt='Scholarship' />
        <img src={galleryImage2} alt='Scholarship' />
        <img src={galleryImage1} alt='Scholarship' />
      </div>
    </div>

    </div>
  )
}

export default Scholarship