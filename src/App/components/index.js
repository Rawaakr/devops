import React from 'react';
import bgNav from '../../assets/bgnav.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css'
import logo from '../../assets/Frame1.png';
import robeDent from '../../assets/robeDent.png';
import robeJ from '../../assets/robeJ.png';
import robeN from '../../assets/robeN.png';
import robeS from '../../assets/robeS.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    const links = [
        { name: "Accueil", path: "/" },
        { name: "A propos", path: "/about" }, 
        { name: "Produits", path: "/products" },    
        { name: "Contactez-nous", path: "/contact" },
        { name: "Panier", path: "/cart" },
        { name: "Se déconnecter", path: "/logout" },];

    return (
        <div className="row navigation-middle-row d-flex justify-content-center navbar-container" style={{ marginTop: '40px', position: 'absolute', width: '100%', zIndex: 2 }}>
            <div className="justify-content-center" style={{ width: '50%' }}>
                <nav className="navbar navbar-expand-lg navbar-small bg-white custom-nav d-flex justify-content-center" style={{ borderRadius: '10px' }}>
                    <ul className="navbar-nav">
                        {links.map(link => (
                            <li className="nav-item" key={link.name}>
                                {/* Utilisation de Link pour créer le lien */}
                                <Link className="StyleMenu" to={link.path}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};


export const Navbar = () => {
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
    backgroundColor: 'rgb(0, 0,0 ,0.75)', 

  };
  const categories = ["Categorie1 ","Categorie2"]

  return (
    <div>
                <nav className="custom-navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid custom-navbar">
                    <a className="navbar-brand StyleTxt" href="#">
                        <i className="fa-solid fa-tag"></i> 20% Discount on selected items
                    </a>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 ">
                            <li className="nav-item flex-grow-2">
                                <a className="nav-link active CustomLink text-center" style={{fontWeight:'bold'}} aria-current="page" href="#">
                                <i className="fa-solid fa-right-to-bracket"></i> Se connecter  
                                </a>
                            </li>
                            <li className="nav-item flex-grow-1">
                                <a className="nav-link CustomLink text-center" style={{fontWeight:'bold',marginLeft:'10px'}} href="#">
                                <i className="fa-solid fa-user-plus"></i> S'inscrire
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
         <div style={containerStyle}>
            <div style={overlayStyle}></div>
            <div className="logo d-flex justify-content-start" style={{ position: 'relative' }}>
                <div className="text-left">
                    <img src={logo} alt="logo" />
                </div>
                <div className='text-center mx-auto' style={{ width: '60%' }}>
                            <form className="d-flex justify-content-center">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'white',color:'gray'}}>
                                    toutes les catégories
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark" style={{backgroundColor:"white",color:"black"}}>

                                    { categories.map(category => {
                                        return(<li><a className="dropdown-item" href="#" style={{color:"black"}}>{category}</a></li>)
                                    })}
                                    </ul>
                                </li>
                                </ul>

                                <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search" />
                                <button className="btn btn-outline-s" type="submit">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </form>
                </div>
                <div className="d-flex">
                    <a className="nav-link text-right" href="#">
                        <i class="fa-solid fa-user" style={{ color: 'white', marginRight: '30px' }}></i>
                    </a>
                    <a className="nav-link text-right" href="#" >
                        <i class="fa-solid fa-cart-shopping" style={{ color: 'white' }}></i>
                    </a>
                </div>

                
            </div>
            
        <SideMenu />

         </div> 
         
    </div>
  );
};
export const ProductCarousel = () => {
    const productList = [
      { id: 1, name: 'robeDentelle', price: '45dt', image: robeN},
      { id: 2, name: 'robeJaune', price: '50dt', image: robeN },
      { id: 3, name: 'robeNoir', price: '60dt', image: robeN},
      { id: 4, name: 'robeSatin', price: '70dt', image: robeN },
      { id: 5, name: 'robeSatin', price: '90dt', image: robeN },
      { id: 6, name: 'robeSatin', price: '100dt', image: robeN },
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3, // Nombre de produits à afficher dans la même ligne
      slidesToScroll: 1,
      autoplay: true, // Activer le défilement automatique
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
  
    return (
      <div className="product-carousel">
        <Slider {...settings}>
          {productList.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} style={{width:'250px',height:'250px'}} />
              </div>
              <div className="product-details d-flex flex-column align-items-center justify-content-center " style={{ marginTop:'20px'}}>
                <h3>{product.name}</h3>
                <p className='Prix'>{product.price}</p>
              </div>
            </div>
          ))}
        </Slider>
        <br></br>
      </div>
    );
  };


export const Footer = () => {
    const containerStyle = {
      backgroundImage: `url(${bgNav})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      height: '300px',
      position: 'relative',
    };
  
    const overlayStyle = {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgb(0, 0,0 ,0.75)',
    };
  
    return (
        <div className='d-flex justify-content-center align-items-center' style={{  overflow: 'hidden' ,marginTop:'50px'}}>
        <div style={containerStyle} >
          <div style={overlayStyle}></div>
          <div className='d-flex ' style={{ marginTop: '30px' }}>
            <div className='col-4  justify-content-end align-items-end'>
              <ul style={{ fontWeight: 'bold', }}>Nos pages</ul>
              <li style={{ marginBottom: '10px' }}><a href='#'>Accueil</a></li>
              <li style={{ marginBottom: '10px' }}><a href='#'>A propos</a></li>
              <li style={{ marginBottom: '10px' }}><a href='#'>Produits</a></li>
              <li style={{ marginBottom: '10px'}}><a href='#'>Contactez-nous</a></li>
            </div>
            <div className='col-4  d-flex flex-column justify-content-start align-items-center custom-column ' >
              <img src={logo} alt='logo' />
              <p> Boutique en ligne pour femme seulement</p>
              <button className='BtnPlus'>Voir plus</button>
            </div>
            <div className='col-4 justify-content-end align-items-end'>
              <div className='row justify-content-end align-items-end'>
                <div className='col-6 justify-content-end align-items-end'>
                  <h5>Horaires d'ouverture</h5>
                  <p>Lu-Ma :          8AM - 4PM</p>
                  <p>Me-Je :          9AM - 6PM</p>
                  <p>Ve-Sa :          10AM - 5PM</p>
                  <p>Dimanche : fermé</p>
                </div>
                </div>
                <div className='row justify-content-end align-items-end'>
                <div className='col-6 justify-content-end align-items-end'>
                <h5>Follow us</h5>
                <div className='d-flex justify-content-center align-items-center' style={{ gap: '15px' }}>
                    <a href='#' className='circle-container'><i class="fa-brands fa-facebook-f "></i></a>
                    <a href='#' className='circle-container'><i className="fa-brands fa-instagram"></i></a>
                    <a href='#' className='circle-container'><i class="fa-solid fa-globe"></i></a>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      

      
    );
  };

  

