import React from 'react'
import Home from "./components/Home";
import LetsConnectForm from "./components/LetsConnectForm";
import Designs from "./components/Designs";
import WebApps from "./components/WebApps";
import About from './components/About';
import Seek from './components/Seek';
import Tools from './components/Tools';
import { Routes, Route } from "react-router-dom";
const AppV1 = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/connect" element={<LetsConnectForm />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/webapps" element={<WebApps />} />
        <Route path="/about" element={<About />} />
        <Route path="/seek" element={<Seek />} />
        <Route path="/password-lookup" element={<Tools />} />
        
    </Routes>
  )
}

export default AppV1