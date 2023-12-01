// About.js
import React, { Fragment } from 'react';
import { Navbar } from '../components';
import bgNav from '../../assets/bgnav.png';
import AboutImg from '../../assets/AboutImg.png';
import '../Style/App.css';
const About = () => {
    const containerStyle = {
        backgroundImage: `url(${bgNav})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '200px',
        position: 'relative',
      };
    
      const overlayStyle = {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgb(0, 0,0 ,0.85)', 
      };
  return (
    
    <Fragment> 
        <div style={containerStyle}>
            <div style={overlayStyle}></div>
            <div className=" d-flex justify-content-center align items-center" style={{ position: 'relative' }}>
                <p style={{color:'white',marginTop:'70px',fontWeight:'bold'}}>Accueil &gt; A propos </p>
            </div>
            </div>
        <div className='' style={{marginTop:'30px'}}>
            <h1 className='StyleTxt' style={{textAlign:'left' , marginLeft:'100px'}}>Qui sommes nous ?</h1>
        </div>
        <div style={{overflow:'hidden'}}>
        <div className='row' style={{marginTop:'20px',marginBottom:'40px',}}>
            <div className='col-1'></div>
            <div className='col-2'>
            <img src={AboutImg} alt='imgpromoshop' style={{ height:'250px',width:'250px'}}/> 
            </div>
            <div className='col-5 justify-content-start'>
                <h3 className='StyleTxt'>PromoShop</h3>
                <p style={{color:'black', marginLeft:'50px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>
        </div>
    </Fragment>
  );
};

export default About;
