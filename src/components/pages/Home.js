import React from 'react';
import Header from '../base/Header';
import Footer from '../base/Footer';
import motoCross from "../../assets/img/motocross.jpg";
import motoCross2 from "../../assets/img/motocross2.jpg";
import logoYellow from "../../assets/img/logoER-YW.png";


function Home() {
  return (
    <>
    <div>
      <Header />
    </div>


    {/* INICIO HERO */}
    <div className="hero min-h-screen" style= {{backgroundImage: `url(${motoCross2})`}}>
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-white"> 

        <div className="max-w-7xl flex">

          <div className="flex-1 ">
            <img src={logoYellow} alt="Logo" />
            <h3 className="mb-5 text-3xl font-semibold">La energía está en tus manos</h3>
            {/* <p className="mb-5 font-bold"></p> */}
            <button className="btn text-lg text-black bg-amarillo hover:bg-white">Cotizar</button>
          </div>

          <div className="flex-1">
            {/* ESTE ES EL DIV DERECHO */}
          </div>
        
        </div>
      </div>
    </div>
    {/* FIN DEL HERO */}

    {/* INICIO PRESENTACIÓN EMPRESA */}





    {/* FIN PRESENTACION EMPRESA */}




    <div>
      <Footer />
    </div>    
    </>
  )
}

export default Home
