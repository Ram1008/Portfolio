import React, { useEffect } from 'react';
import { About, Footer, Header, Skills, Testimonial, Work, Tools } from './containers';
import { Navbar } from './components';
import { Routes, Route, useLocation } from 'react-router-dom';
import './AppV2.scss';

const AppV2 = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className='app'>
      <Routes>
        <Route path="/tools" element={<Tools />} />
        <Route path="/" element={
          <>
            <Navbar />
            <Header />
            <Work />
            <About />
            <Skills />
            <Testimonial />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default AppV2;
