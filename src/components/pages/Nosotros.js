import React from 'react';
import Header from '../base/Header';
import Footer from '../base/Footer';
import EnConstruccionImg from '../../assets/img/En-construccion.jpg';
function Nosotros() {
  return (
    <>
    <div>
      <Header />
    </div>
    <div className="navbar bg-base-100">
        <div className="flex justify-center"> {/* Centrar contenido horizontalmente */}
            <img src={EnConstruccionImg} alt="En construcción" className="max-w-lg" /> 
           
        </div>
    </div>
    <div>
      <Footer />
    </div>    
    </>
  )
}

export default Nosotros