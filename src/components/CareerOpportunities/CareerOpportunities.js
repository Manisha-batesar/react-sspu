import React, { useState, useEffect } from 'react';
import './CareerOpportunities.css';
import { motion } from 'framer-motion';
import Vector from '../../assets/vector.png'; 
import healthAndBeauty from '../../assets/logo-1.png';
import handShake from '../../assets/handshake.png';
import face from '../../assets/face_3.png';

const contentList = [
  {
    img: healthAndBeauty,
    text: 'Partnerships with salons, spas, beauty brands',
  },
  {
    img: handShake,
    text: 'Jobs and career paths after graduation',
  },
  {
    img: face,
    text: 'Internship or externship programs',
  },
];

const CareerOpportunities = () => {
  const [rotatedList, setRotatedList] = useState(contentList);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatedList((prevList) => {
        const [first, ...rest] = prevList;
        return [...rest, first]; // move first to end
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
      <h2>Career Opportunities And Industry Connections</h2>

      <div className='careerContainer'>
        <div className='left'>
          {rotatedList.map((item, index) => (
            <motion.div
              key={item.text}
              className='leftContent'
              animate={{
                scale: index === 0 ? 1.1 : 1,
                opacity: index === 0 ? 1 : 0.6,
              }}
              transition={{ duration: 0.5 }}
            >
              <img src={item.img} alt='logoImage' />
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className='right'> 
          <img src={Vector} alt='logo-image1' className='imageOne' />
        </div>
      </div>
    </div>
  );
}

export default CareerOpportunities;
