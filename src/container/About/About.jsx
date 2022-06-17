import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';
import { urlFor, client } from '../../client';

const aboutItems = [
  {
    title: 'Angular',
    description: 'I am a good web developer.',
    imgUrl: images.aboutAngular
  },
  {
    title: 'ReactJS',
    description: 'I am a good web developer.',
    imgUrl: ''
  },
  {
    title: 'UI/UX',
    description: 'I am a good web developer.',
    imgUrl: ''
  },
  {
    title: 'UI/UX',
    description: 'I am a good web developer.',
    imgUrl: ''
  }
]

const About = () => {

  // const [aboutItems, setAboutItems] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "aboutItems"]';

  //   client.fetch(query)
  //     .then((data) => setAboutItems(data))
  // }, []);


  return (
    <>
      <h2 className='head-text'>I know that <span>Good Development</span><br /> means <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {aboutItems.map((about, index) =>
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>

          </motion.div>)}
      </div>
    </>
  )
}

export default About