import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {

  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';
    const testimonialsQuery = '*[_type == "testimonials"]';


    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      })

    client.fetch(testimonialsQuery)
      .then((data) => {
        setTestimonials(data);
      })
  }, []);

  const testimonialCurrent = testimonials[currentIndex];
  return (
    <>
      {testimonials.length > 0 && (
        <>
          <div
            className='app__testimonial-item app__flex'>
            <img src={urlFor(testimonialCurrent.imageurl)} alt='testimonial' />
            <div className='app__testimonial-content'>
              <p className='p-text'>{testimonialCurrent.feedback}</p>
              <div>
                <h4 className='bold-text'>{testimonialCurrent.name}</h4>
                <h5 className='bold-text'>{testimonialCurrent.company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div className='app__flex' onClick={() => handleClick(
              currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft className='app__testimonial-icon' />
            </div>
            <div className='app__flex' onClick={() => handleClick(
              currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight className='app__testimonial-icon' />
            </div>
          </div>
        </>
      )}
      <div className='app__testimonials-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))};
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonials',
  "app__primarybg"
);