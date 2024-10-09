import React, {useState, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';
import {WebData} from '../data/WebData';
import Navbar from '../assets/Navbar';
import Button from '../assets/Button';
import Styles from "./Designs.module.css";
import Hammer from 'hammerjs';

const WebApps = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(WebData.length);

  const handleNextClick = useCallback(() => {
    const newPage = (currentPage + 1) % totalPages;
    setCurrentPage(newPage);
  }, [currentPage, totalPages]);

  const handlePrevClick = useCallback(() => {
    const newPage = (currentPage - 1 + totalPages) % totalPages;
    setCurrentPage(newPage);
  }, [currentPage, totalPages]);
  useEffect(() => {
    const container = document.getElementById('designsContainer');
    const mc = new Hammer.Manager(container);
    mc.add(new Hammer.Swipe());
    mc.on("swiperight", handlePrevClick);
    mc.on("swipeleft", handleNextClick);
    return () => {
        mc.off("swiperight", handlePrevClick);
        mc.off("swipeleft", handleNextClick);
        mc.destroy();
      };
    }, [currentPage, handlePrevClick, handleNextClick]);

  return (
    <div id="designsContainer" className={Styles.container}>
        <Navbar/>
        <div className={Styles.mainHeading}>Web Applications</div>
        <div className={Styles.segment}>
        <div className = {Styles.productWrapper}>
        <div className={Styles.thumbnailWrapper}>
                    <img  className={Styles.thumbnail} src={WebData[currentPage].thumbnail_url} alt= "thumbnail"/>
                </div>
                <div className= {Styles.descriptionWrapper}>
                    <div className={Styles.title}>
                        {WebData[currentPage].title}
                    </div>
                    <div className={Styles.description}>
                        {WebData[currentPage].description}
                    </div>
                    <div style={{display: 'flex'}}>
                      <div style={{margin:'5px'}} >
                      {WebData[currentPage].appLink && <Link to ={WebData[currentPage].link} target='_blank'><Button  name = 'View App'/></Link>}
                      </div>
                      <div style={{margin:'5px'}}>
                        {WebData[currentPage].gitLink && <Link to ={WebData[currentPage].gitLink} target='_blank'><Button name = 'View Github'/></Link>}</div>
                    </div>
                </div>
        </div>
        <div className={Styles.paginationWrapper}>
                <button className={Styles.circlularButton}  onClick={handlePrevClick}> </button>
                <button className={Styles.circlularButton} onClick={handleNextClick}> </button>
            </div>
        </div>

    </div>
  )
}

export default WebApps;