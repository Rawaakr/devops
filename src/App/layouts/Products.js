import React, { Fragment } from "react";
import robeN from '../../assets/robeN.png'
import bgNav from '../../assets/bgnav.png'
const Products = () => {
    const Products =  [
        { id: 1, name: 'robeDentelle', price: '45dt', image: robeN},
        { id: 2, name: 'robeJaune', price: '50dt', image: robeN },
        { id: 3, name: 'robeNoir', price: '60dt', image: robeN},
        { id: 4, name: 'robeSatin', price: '70dt', image: robeN },
        { id: 5, name: 'robeSatin', price: '90dt', image: robeN },
        { id: 6, name: 'robeSatin', price: '100dt', image: robeN },
        { id: 6, name: 'robeSatin', price: '100dt', image: robeN },
        { id: 6, name: 'robeSatin', price: '100dt', image: robeN },
        { id: 6, name: 'robeSatin', price: '100dt', image: robeN },


      ];
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
                <p style={{color:'white',marginTop:'70px',fontWeight:'bold'}}>Accueil &gt; Produits </p>
            </div>
            </div>
        <div className='' style={{marginTop:'30px'}}>
            <h1 className='StyleTxt' style={{textAlign:'left' , marginLeft:'100px'}}>Produits</h1>
        </div>
        <div className="container" style={{ maxWidth: '1200px' ,marginBottom:'30px'}}>
            <div className="row" style={{marginTop:'50px'}}>
                {Products.map((product) => (
                <div className="col-12 col-md-6 col-lg-3" key={product.id}>
                    <div className="product-card" style={{marginTop:'20px'}}>
                    <div className="product-image">
                        <img src={product.image} alt={product.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                    </div>
                    <div className="product-details d-flex flex-column align-items-center justify-content-center" style={{ marginTop: '20px' }}>
                        <h3 className="Prix">{product.name}</h3>
                        <p className='Prix'>{product.price}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>



     

    </Fragment>
);
};
export default Products;