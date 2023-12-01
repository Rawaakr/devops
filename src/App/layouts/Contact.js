import React, { Fragment } from "react";
import bgNav from '../../assets/bgnav.png';
import '../Style/App.css';
const Contact = () => {
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
    return(
        <Fragment>
            <div style={containerStyle}>
            <div style={overlayStyle}></div>
            <div className=" d-flex justify-content-center align items-center" style={{ position: 'relative' }}>
                <p style={{color:'white',marginTop:'70px',fontWeight:'bold'}}>Accueil &gt; Contact </p>
            </div>
            </div>
        <div className='' style={{marginTop:'30px'}}>
            <h1 className='StyleTxt' style={{textAlign:'left' , marginLeft:'100px'}}>Contactez-nous</h1>
        </div>
        <div className="container" style={{maxWidth:'960px', marginTop:'50px',marginBottom:'50px'}}>
            <form>
            <div class="row g-3">
                <div class="col">
                    <label for="inputName" class="form-label">Nom</label>
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                </div>
                <div class="col">
                    <label for="inputName" class="form-label">Prénom</label>
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                </div>
            </div>
            <div className="row g-3" style={{marginTop:'20px'}}>
                <div class="col-md-6">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" placeholder="email@email" />
                </div>
                <div class="col-md-6">
                    <label class="form-label">Numéro de téléphone</label>
                    <input type="text" class="form-control" placeholder="Phone number"/>
                </div>
            </div>
            <div className="row g-3" style={{marginTop:'20px'}}>
                <div class="col-md-12">
                    <label class="form-label">Adresse</label>
                    <input type="text" class="form-control" placeholder="Phone number"/>
                </div>
            </div>
            <div className="row g-3" style={{marginTop:'20px'}}>
                <div class="col-md-12">
                    <label class="form-label">Message</label>
                    <textarea class="form-control" placeholder="Leave a comment here" ></textarea>
                </div>
            </div>
            <button className="BtnShop" style={{width:'100px',height:'40px',fontSize:'20px'}}>Envoyer</button>
            </form>
        </div>
        </Fragment>
    );

};
export default Contact;