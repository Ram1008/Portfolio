import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <FaLinkedin  onClick={() =>  window.open('https://www.linkedin.com/in/ram-chandel-074a71174', '_blank') }/>
        </div>
        <div>
            <FaGithub onClick={() =>  window.open('https://github.com/Ram1008', '_blank') }/>
        </div>
        <div>
            <FaInstagram onClick={() =>  window.open('https://www.instagram.com/ram_chandel369', '_blank') }/>
        </div>
    </div>
  )
}

export default SocialMedia;