import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Geoapi from './components/Geoapi';
import AboutUs from './components/AboutUs';


const App = () => {
  return (
    <BrowserRouter>
    
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path='/geoapi' element={<Geoapi/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
        </Routes>
      </div>
    
  </BrowserRouter>
  );
}

export default App;
