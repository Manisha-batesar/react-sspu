import React from 'react';
import testimonialimg1 from '../../assets/testimonial1.png';
import testimonialimg2 from '../../assets/testimonial2.png';
import testimonialimg3 from '../../assets/testimonial3.png';
import testimonialimg4 from '../../assets/testimonial4.png';
import testimonialimg5 from '../../assets/testimonial5.png';

import './Testimonial.css';
import EmblaCarousel from '../Common/EmblaCarousel/EmblaCarousel';

const testimonialImages = [testimonialimg1, testimonialimg2, testimonialimg3, testimonialimg4, testimonialimg5];

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
  { reviewContent, title: '-Mitali Sahu: BSc Beauty and Wellness (2018-2021)' },
  { reviewContent, title: '-Mitali Sahu: BSc Beauty and Wellness (2018-2021)' },
  { reviewContent, title: '-Mitali Sahu: BSc Beauty and Wellness (2018-2021)' },
  { reviewContent, title: '-Mitali Sahu: BSc Beauty and Wellness (2018-2021)' },
  { reviewContent, title: '-Mitali Sahu: BSc Beauty and Wellness (2018-2021)' },
]

const ReviewCardItem = ({ review, title }) => {
  return <div className='cardDiv'>
    <p> {review}</p>
    <br />
    <span>{title}</span>
  </div>
}

const carouselSlides = cards.map((card, index) => {
  return (
    <ReviewCardItem key={index} review={card.reviewContent} title={card.title}
    />
  )
});
const Testimonial = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const onSlideChange = (emblaApi) => {
    const inViewSlides = emblaApi.slidesInView();
    const currentSlide = inViewSlides[1] ?? inViewSlides[0];
    setCurrentSlideIndex(currentSlide);
  }

  return (
    <section className='reviewContainer'>
      <EmblaCarousel options={{ direction: 'rtl', loop: true }} slides={carouselSlides} onSlideChange={onSlideChange} />
      <img src={testimonialImages[currentSlideIndex]} alt="testimonial" className='imgDiv' />
    </section>
  )
}

export default Testimonial;
