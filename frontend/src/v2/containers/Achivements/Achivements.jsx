// import React, { useState, useEffect } from 'react';
// import { AiFillEye, AiFillGithub } from 'react-icons/ai';
// import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../../client';
import './Achivements.scss';

const Achivements = () => {

    return (
        <div className="gallery">
            <img src="https://picsum.photos/id/1028/300/300" alt="a forest after an apocalypse"/>
            <img src="https://picsum.photos/id/15/300/300" alt="a waterfall and many rocks"/>
            <img src="https://picsum.photos/id/1040/300/300" alt="a house on a mountain"/>
            <img src="https://picsum.photos/id/106/300/300" alt="sime pink flowers"/>
            <img src="https://picsum.photos/id/136/300/300" alt="big rocks with some trees"/>
            <img src="https://picsum.photos/id/1039/300/300" alt="a waterfall, a lot of tree and a great view from the sky"/>
            <img src="https://picsum.photos/id/110/300/300" alt="a cool landscape"/>
            <img src="https://picsum.photos/id/1047/300/300" alt="inside a town between two big buildings"/>
            <img src="https://picsum.photos/id/1057/300/300" alt="a great view of the sea above the mountain"/>
        </div>
        )
}
export default  AppWrap(MotionWrap(Achivements, 'app__work'), 'work', "app__primarybg");