import React, {useState, useEffect} from 'react';
import './About.scss';
import {motion} from 'framer-motion';
import { urlFor, client } from '../../../client';
import { AppWrap } from '../../wrapper';
import { MotionWrap } from '../../wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) => setAbouts(data));
  }, [])

  return (
    <>
      <h3 className='head-text'>
      <span>Living,&nbsp;</span>
        Learning,&nbsp;
        <br/>
        Leveling up 
        <span> At </span>
        <span> Once</span>
      </h3>
      <div className ='app__profiles'>
        {
          abouts.map(( about, index) =>(
            <motion.div
              whileInView={{opacity: 1}}
              whileHover={{scale: 1.1}}
              transition={{duration: 0.5, type: 'tween' }}
              className='app__profile-item'
              key={about.title + index}
            >
              <img src = {urlFor(about.imgUrl)} alt = {about.title} />
              <h3  style={{marginTop: 20}}> {about.title} </h3>
              <p style={{marginTop: 10, textAlign: "center"}}> {about.description} </p>
            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');