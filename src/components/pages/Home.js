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
            <h3 className="mb-5 text-3xl font-semibold text-neutral-100">La energía está en tus manos</h3>
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

    <div className='container max-w-7xl mx-auto border-2 border-slate-700'>
      <div className='py-20'>
        <div>
          {/* SECCION ELECTROMOVILIDAD */}
          <h1 className='text-center text-neutral-100 font-bold text-4xl pb-8'><span className='font-bold text-5xl'>Descubre</span> el futuro de la <span className='text-amarillo'>Electromovilidad</span></h1>
          <p className='text-center max-w-lg mx-auto py-4 px-8 text-white text-base'> En ELECTRO RIDERS nos enorgullece ser pioneros en la transformación de la movilidad a través de soluciones sostenibles y eficientes.</p> 
          
          <p className='text-center max-w-lg mx-auto pb-16 px-6 text-neutral-100 text-base'>Nuestro compromiso es brindar una respuesta integral a las necesidades de aquellos que desean dar el paso hacia una movilidad más limpia y ecoamigable.
          </p>
          {/*FIN SECCION ELECTROMOVILIDAD  */}

          {/*CARD 1 */}
          <div className='px-4 py-4'>
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl mx-auto">
              <figure><img src={logoYellow} alt="Album" style={{ width: '400px' }}/></figure>
              <div className="card-body">
                <h2 className="card-title">Conversión Diesel a Eléctrico</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Listen</button> */}
                </div>
              </div>
            </div>
          </div>
          {/* FIN CARD 1 */}

          {/* CARD 2 */}
          <div className='px-4 py-4'>
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
          {/* FIN CARD 2 */}
        </div>

        {/* SECCION VIDEO */}
        <div>
          <h1 className='text-left px-6 text-neutral-100 font-bold text-4xl pb-8 pt-20 sm:text-center'><span className='font-bold text-5xl'>Únete</span> a la <span className='text-amarillo'>Revolución Eléctrica</span> sobre dos ruedas</h1>
          <div class="w-full max-w-4xl sm:w-full md:w-4/5 lg:w-4/5 xl:w-3/4 mx-auto">
            <div class="iframe-container">
              <iframe
                class="w-full h-full"
                src="https://www.youtube.com/embed/h7aS6cLVgVs?si=7u6tyV9Sa5KLSpgZ"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* FIN SECCION VIDEO */}
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
