import React from 'react';
import Header from '../base/Header';
import Footer from '../base/Footer';
import motoCross from "../../assets/img/motocross.jpg";
import logoYellow from "../../assets/img/logoER-YW.png";


function Home() {
  return (
    <>
    <div>
      <Header />
    </div>

    <div className="hero min-h-screen" style= {{backgroundImage: `url(${motoCross})`}}>
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-white"> 

        <div className="max-w-md">

          <img src={logoYellow} alt="Logo" />
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">Únete al cambio, convierte con nosotros un nuevo futuro</p>
          <button className="btn btn-primary">Cotizar</button>
        </div>
      
      </div>
    </div>

    
    
    <div>
      <Footer />
    </div>    
    </>
  )
}

export default Home
