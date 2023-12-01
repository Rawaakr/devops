import React, { Fragment } from 'react';
import { Navbar , ProductCarousel, Footer } from './components';
import './Style/App.css';
import Slider1 from '../assets/SliderWhite.png';
import Slider2 from '../assets/SliderBlack.png';
import Slider3 from '../assets/SliderPink.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter,Routes, Route, Switch, Link } from 'react-router-dom';
import About from './layouts/About';
import Home from './layouts/Home';
import Products from './layouts/Products';
import Contact from './layouts/Contact';
const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
        <Footer />
      </Fragment>
    
    </BrowserRouter>
  );
};

export default App;
