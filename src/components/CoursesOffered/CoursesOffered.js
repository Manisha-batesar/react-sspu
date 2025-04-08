import React from 'react'
import './CoursesOffered.css';
import studentSalon1 from '../../assets/image7.png';
import studentSalon2 from '../../assets/formImage.jpg';

import OfferedCourses from './components/OfferedCourses';

const CoursesOffered = () => {
  const [activeButton, setActiveButton] = React.useState(0);
  return (

    <div className='Container'>

      <h2>Courses Offered</h2>

      <div className='courseContainer'>

      
         <div className='btnContent'>
          <div className='offeredCourses'>
                                     
          <button type="button" className={`${activeButton === 0 ? 'active' : ''}`} onClick={()=>{
            setActiveButton(0)
             }}>BSc. Beauty &<br /> Wellness</button>
            <button type="button" className={`${activeButton === 1 ? 'active' : ''}`} onClick={()=>{
            setActiveButton(1)
            }}>BSc.Nutritional <br />Sciences & Diabetics</button>
            <button type="button" className={`${activeButton === 2 ? 'active' : ''}`} onClick={()=>{
            setActiveButton(2)
            }}>MSc.Nutritional <br />Sciences & Diabetics</button>
          </div>
          </div>
       
         

{activeButton === 0 ?   <OfferedCourses /> : ''}
{activeButton === 1 ?    <OfferedCourses image={studentSalon1}/> : ''}
{activeButton === 2 ?     <OfferedCourses image={studentSalon2}/> : ''}
  
   

    </div>
    </div>

  )

}

export default CoursesOffered