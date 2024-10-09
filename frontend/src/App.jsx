import React from 'react';
import AppV1 from './v1/AppV1';
import AppV2 from './v2/AppV2';
import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
    <Routes>
      <Route path={"/*"} element = {<AppV2/>}/>
      <Route path={"/v1/*"} element = {<AppV1/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App;