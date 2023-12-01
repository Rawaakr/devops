import React, { Fragment } from 'react';
import { Navbar , ProductCarousel, Footer } from '../components';
import '../Style/App.css';
import Slider1 from '../../assets/SliderWhite.png';
import Slider2 from '../../assets/SliderBlack.png';
import Slider3 from '../../assets/SliderPink.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {
    return (
        <Fragment>
        <div id="carouselExample" className="carousel slide " style={{ backgroundColor: '#f7c4f0' }} data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            <div className="carousel-item active d-flex align-items-center">
              <div className="row w-100 justify-content-between">
                <div className="col-5 d-flex justify-content-start align-items-center">
                  <div className="carousel-text" style={{ marginLeft: '100px' }}>
                    <h1 className="StyleTxt">20% OFF</h1>
                    <h3 className="StyleTxt3">Set your style & latest fashion</h3>
                    <button className="BtnShop">Shop Now</button>
                  </div>
                </div>    
                <div className="col-5 d-flex justify-content-end">
                  <img src={Slider1} className="d-block w-75" alt="Slider 1" style={{ maxHeight: '100%', objectFit: 'contain' }} />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row w-100 justify-content-between">
                <div className="col-5 d-flex justify-content-start align-items-center">
                  <div className="carousel-text" style={{ marginLeft: '100px' }}>
                    <h1 className="StyleTxt">20% OFF</h1>
                    <h3 className="StyleTxt3">Set your style & latest fashion</h3>
                    <button className='BtnShop ' >Shop Now</button>
                  </div>
                </div>
                <div className="col-5 d-flex justify-content-end">
                  <img src={Slider2} className="d-block w-75" alt="Slider 2" style={{ maxHeight: '100%', objectFit: 'contain' }}/>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row w-100 justify-content-between">
                <div className="col-5 d-flex justify-content-start align-items-center">
                  <div className="carousel-text" style={{ marginLeft: '100px' }}>
                    <h1 className="StyleTxt">20% OFF</h1>
                    <h3 className="StyleTxt3">Set your style & latest fashion</h3>
                    <button className='BtnShop'>Shop Now</button>
                  </div>
                </div>
                <div className="col-5 d-flex justify-content-end">
                  <img src={Slider3} className="d-block w-75" alt="Slider 3" style={{ maxHeight: '100%', objectFit: 'contain' }}/>
                </div>
              </div>
            </div>
          </div>
        </div> 
        
        <br></br>
        <div>
          <h1 className='StyleTxt' style={{Position:'Center'}} >Nos Produits<br></br><i class="fa-solid fa-shirt" style={{marginTop:'25px'}}></i></h1>
          <ProductCarousel />
  
        </div>
  
      </Fragment>
    );
  };
  
  export default Home;