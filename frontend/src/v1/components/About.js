import React from 'react';
import Navbar from '../assets/Navbar';
import Styles from "./About.module.css";
import SchoolLogo from '../../assets/schoolLogo.png';
import CollegeLogo from '../../assets/collegeLogo.png';
import {achivements} from '../data/AboutData';
const About = () => {
  return (
    <div className={Styles.container}>  
        <Navbar/>
        <div className={Styles.seg1}>
            <div className={Styles.seg1Title}>Education</div>
            <div className={Styles.seg1Content}>
                <div className={Styles.school}>
                    <img className={Styles.schoolLogo} src = {SchoolLogo} alt='school Logo'/>
                    <div className={Styles.schoolDescription}>
                    7 best years of my life were spent in Delhi Public School Kashi. <br/> 
                    The school not only set me to academic excellence but also has a deep impact on my persona, building and nurishing that what I call me.<br/>
                    I completed my high school with 10 CGPA and opted for Science and Mathematics to pursue engineering. <br/> 
                    I was preparing for Joint Entrence Exam (JEE Mains and Advanced) simultaneously with my senior secondary which got my set for next 4 years.
                    </div>
                    <div className={Styles.schoolName}>
                        Delhi Public School Kashi
                    </div>
                </div>
                <div className={Styles.verticalBar}>
                    <div className={`${Styles.circularDot} ${Styles.startDot} `} ></div>
                    <div className={`${Styles.circularDot} ${Styles.endDot} `}></div>
                </div>
                <div className={Styles.school}>
                <img className={Styles.schoolLogo} src = {CollegeLogo} alt='school Logo'/>
                <div className={Styles.schoolDescription}>
                   The persuite continues in the college where. I choose Electronics and Communication Engineering as my branch.<br/>
                   College is I think the best place to re-evaluate your self and my rising interest in coding and development pushed me into taking the bold decision of switching my carrer path from an electronics engineer to a computer science enthusiast.<br/>
                   Listing to my inner calling I started to code and dedicated my 4 years to coding, clubs and sports. 
                </div>
                    <div className={Styles.schoolName}>
                        Indian Institute of Information Technology
                    </div>
                </div>
            </div>
        </div>
        <div className={Styles.seg2}>
            <div className={Styles.seg2Title}>
                Achivements
            </div>
            <div className={Styles.achivements}>
                {
                    achivements.map(achivement =>
                        <img key={achivement} className={Styles.achivementsItem} src = {achivement} alt = "me"/>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default About;