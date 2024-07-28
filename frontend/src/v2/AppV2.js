import React from 'react'
import { About, Footer, Header, Skills, Testimonial, Work, Tools} from './containers';
import { Navbar } from './components';
import { Routes, Route } from 'react-router-dom';
import './AppV2.scss';

const AppV2 = () => {
  return (
    <div className='app'>
      
      <Routes>
        <Route path="/tools" element = {<Tools/>} />
        <Route path="/" element={
          <>
            <Navbar/>
            <Header />
            <Work />
            <About />
            <Skills />
            <Testimonial />
            <Footer/>
          </>
        } />
      </Routes>
      
    </div>
  )
}

export default AppV2