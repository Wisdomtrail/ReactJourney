import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';


import Menstration from './pages/dashboard/componenent/Menstration';

import TrackPeriod from './pages/dashboard/componenent/TrackPeriod';
import PregnancyTest from './pages/dashboard/componenent/PregnancyTest';
import RateUs from './pages/dashboard/componenent/RateUs';
import AboutUs from './pages/dashboard/componenent/AboutUs';
import Mycomponent from './pages/dashboard/componenent/Fecth';
import Calculator from './pages/dashboard/componenent/Calculator';
import Card from './pages/dashboard/componenent/Card';
import Form from './pages/dashboard/componenent/Form.jsx';
function App() {
  return (
    <div className="App">
    
      {/* <Router>
        <Routes>
          <Route path='/' element={<Menstration/>}/>
          <Route path='/trackPeriod' element={<TrackPeriod/>}/>
          <Route path='/pregnancyTest' element={<PregnancyTest/>}/>
          <Route path='/rateUs' element={<RateUs/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
        </Routes>
      </Router>  */}
      {/* <Calculator/>  */}
     {/* <Mycomponent/> */}
     {/* <Card/> */}
     <Form/>
    </div>
  );
}

export default App;
