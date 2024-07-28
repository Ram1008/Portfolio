import React, { useEffect, useState } from 'react'
import { MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../../client';
import { useNavigate } from 'react-router-dom';

import './Tools.scss';

const Tools = () => {
    const [tools, setTools] = useState([]);
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/v1/password-lookup');
    }
    useEffect(() => {
        const query = '*[_type == "tools"]';
        client.fetch(query).then((data) => {
            setTools(data);
        });
      }, []);
  return (
    <div className='app__tools'>   
        <h4 className='head-text'>Tools</h4> 
        <div className='app__tools-portfolio'>
            {tools.map((tool, index) => (
            <div className='app__tools-item app__flex' key={index} onClick={handleClick}>
                <div className='app__tools-img app__flex'>
                <img src={urlFor(tool.imgUrl)} alt={tool.title} />
                <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                    className='app__tools-hover app__flex'
                />
                </div>
                <div className='app__tools-content app__flex'>
                <p className='p-text' style={{ marginTop: 10 }}>{tool.description}</p>
                <div className='app__tools-title app__flex'>
                    {
                    <h4 key={tool.title} className='bold-text'>{tool.title} &nbsp;</h4>
                    }
                </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default MotionWrap(Tools, 'app__tools');