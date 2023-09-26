import React from 'react';
import Header from '../base/Header';
import Footer from '../base/Footer';
import motoCross from "../../assets/img/motocross.jpg";
import motoCross2 from "../../assets/img/motocross2.jpg";
import logoYellow from "../../assets/img/logoER-YW.png";
import { Link } from 'react-router-dom';


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
            <Link to="/contacto">
              <button className="btn text-xl border-0 text-black bg-amarillo hover:bg-white">Cotizar</button>
            </Link>
          </div>

          <div className="flex-1">
            {/* ESTE ES EL DIV DERECHO sin texto */}
          </div>
        
        </div>
      </div>
    </div>
    {/* FIN DEL HERO */}

    {/* INICIO PRESENTACIÓN EMPRESA */}

    <div className='container max-w-7xl mx-auto border-2 border-red-400'>

      <div className='py-20'>

        <div>
          <h1 className='text-center text-3xl pb-4' >Bienvenido a ElectroRiders</h1>
          <p className='text-center max-w-md mx-auto pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div>
          <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl mx-auto">
            <figure><img src={logoYellow} alt="Album" style={{ width: '400px' }}/></figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Listen</button> */}
              </div>
            </div>
          </div>

          <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl mx-auto">
            <figure><img src={logoYellow} alt="Album" style={{ width: '400px' }}/></figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Listen</button> */}
              </div>
            </div>
          </div>

        </div>



      </div>



      
    </div>





    {/* FIN PRESENTACION EMPRESA */}




    <div>
      <Footer />
    </div>    
    </>
  )
}

export default Home
