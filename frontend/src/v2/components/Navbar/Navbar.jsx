import React, { useState } from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showVersion, setShowVersion] = useState(false);
  const versions =["2.0.1", "1.0.3"];

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {["work", "about", "skills", "testimonial", "contact", "tools"].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div></div>
            {item === "tools" ? (
                    <Link to='/tools'>{item}</Link>
                  ) : (
                    <a href={`#${item}`}>{item}</a>
                  )}
          </li>
        ))}
      </ul>
      <div className='app__navbar-versions'>
        <div onClick={() => setShowVersion(prev => !prev)}>
          {!showVersion ?
            <div>
              <p className='p-text'>Versions</p>
              <SlArrowDown />
            </div> :
            <div>
              <p className='p-text'>Versions</p>
              <SlArrowUp />
            </div>
          }
        </div>
        {showVersion && (
          <motion.div
            whileInView={{ y: [-5, 5] }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='app__navbar-previous-versions'
          >
            <ul>
              {versions.map((item) => (
                <li key={`link-${item}`} className='p-text'>
                  <Link to={item === "1.0.3" ? `/v1/` : `/`}>{item}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => {
          setToggle(true)
          }} />
        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className='app__navbar-links'>
              {["work", "about", "skills", "testimonial", "contact", "tools"].map((item) => (
                <li key={`link-${item}`} className='app__flex p-text'onClick={() => setToggle(false)} >
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
