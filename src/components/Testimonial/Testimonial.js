import React from 'react';
 import testimonialimg1 from '../../assets/testimonial1.png';
 import testimonialimg2 from '../../assets/testimonial2.png';
 import testimonialimg3 from '../../assets/testimonial3.png';
 import testimonialimg4 from '../../assets/testimonial4.png';
 import testimonialimg5 from '../../assets/testimonial5.png';

import './Testimonial.css';

const reviewContent = `This (BSc in Beauty and Wellness) degree is very unique in itself as it provides Makeup, Hair,
Skin and wellness vertical altogether and only Symbiosis Skills and Professional University is
providing this unique kind of degree, here they mostly focused on the skills. The faculties also
take the efforts to get internships according to the students specialized sector or their interests.
And now during this pandemic of Corona virus which let us to the lock down……and home
quarantine…… SSPU has organized Online lectures and Assignments so that the students could
cope up with the syllabus and studies. They have also organized Online exams …… And As it’s a
skill based University we are provided with videos and ideas to show our creativity and our skills
so that we won’t lose our track and continue our work and the faculties are always ready to
support and help the students out …… Thank you.`

const cards = [
  { img: testimonialimg1,reviewContent, title: '-Mitali Sahu: BSc Beauty and Wellness (2018-2021)' },
  { img: testimonialimg2,reviewContent, title: '-Mitali Sahu: BSc Beauty and Wellness (2018-2021)' },
  { img: testimonialimg3, reviewContent,title: '-Mitali Sahu: BSc Beauty and Wellness (2018-2021)' },
  { img: testimonialimg4,reviewContent, title: '-Mitali Sahu: BSc Beauty and Wellness (2018-2021)' },
  { img: testimonialimg5,reviewContent, title: '-Mitali Sahu: BSc Beauty and Wellness (2018-2021)' },
]
const Testimonial = () => { 
  
  return (
    <section className='reviewContainer'>
      <div className='cardDiv'>
       <p> {reviewContent}</p>
       <br/>
        <span>-Mitali Sahu: BSc Beauty and Wellness (2018-2021)</span>
      </div>
      <img src={testimonialimg1} alt="testimonial" className='imgDiv'/>
    </section>
  )
}

export default Testimonial;
