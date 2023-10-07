import React, { useState, useEffect } from 'react';
import Header from '../base/Header';
import Footer from '../base/Footer';
import motoCross2 from "../../assets/img/motocross2.jpg";
import motoPng from "../../assets/img/m.png";

import logoYellow from "../../assets/img/logoER-YW.png";
import { Link } from 'react-router-dom';
import '../css/stylesHero.css';
import '../css/stylesHome.css';


function Home() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [isButtonAbsolute, setIsButtonAbsolute] = useState(false);

  const scrollToPresentation = () => {
    const presentationElement = document.querySelector('.presentation');
    presentationElement.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
  
      const footerTop = document.querySelector('footer').getBoundingClientRect().top;
      if (footerTop < window.innerHeight) {
        setIsButtonAbsolute(true);
      } else {
        setIsButtonAbsolute(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <>
    <div>
      <Header />
    </div>
    


    {/* INICIO HERO */}
    <div className="hero min-h-screen bg-responsive" style= {{backgroundImage: `url(${motoCross2})`}}>
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-white"> 

        <div className="max-w-7xl flex">

          <div className="flex-1 ">
            <img src={logoYellow} alt="Logo" />
            <h3 className="mb-5 text-xl md:text-3xl font-semibold text-neutral-100">La energía está en tus manos</h3>
            {/* <p className="mb-5 font-bold"></p> */}
            <Link to="/contacto">
              <button className="btn text-xl mt-20 border-0 text-black bg-amarillo hover:bg-white">Cotiza Aquí</button>
            </Link>
          </div>

          <div className="flex-1">
            {/* ESTE ES EL DIV DERECHO sin texto */}
          </div>
        
        </div>
      </div>
    </div>
    {/* FIN DEL HERO */}
    <button className="scroll-down-btn bounce btn btn-glass text-3xl p-5" onClick={scrollToPresentation}>🡻</button>



    {/* INICIO PRESENTACIÓN EMPRESA */}
    
    <div className='container max-w-7xl mx-auto presentation'>
      <div className='py-20  border-slate-700'>
        <div>
          {/* SECCION ELECTROMOVILIDAD */}
          <h1 className='animate-slide-right text-center text-neutral-100 font-bold text-4xl pt-10'><span className='font-bold text-5xl'>Descubre</span> el futuro de la <span className='text-amarillo'>Electromovilidad</span></h1>
          <p className='fade-in-from-bottom text-center max-w-lg mx-auto py-8 px-8 text-white text-base'> En ELECTRO RIDERS nos enorgullece ser pioneros en la transformación de la movilidad a través de soluciones sostenibles y eficientes.</p> 
          
          <p className='text-center max-w-lg mx-auto pb-8 px-6 text-neutral-100 text-base'>Nuestro compromiso es brindar una respuesta integral a las necesidades de aquellos que desean dar el paso hacia una movilidad más limpia y ecoamigable.
          </p>
          {/*FIN SECCION ELECTROMOVILIDAD  */}

          {/* SECCION MOTO KXF */}
          <div className='py-14'>
            <h1 className='animate-slide-left text-center text-neutral-100 font-bold text-4xl py-10'><span className='font-bold text-5xl text-amarillo'>KXF-E</span>, la motocross enduro <span>100% eléctrica</span></h1>
            {/* <h1 className='animate-slide-right text-center text-neutral-100 font-bold text-4xl pb-8'>hecha en Chile</h1> */}
                      
            <div className="max-w-4xl mx-auto sm:flex items-center pt-4">

              <div className="sm:w-1/2">
                <img src={motoPng} alt="Album" className="w-full md:w-200 hover:scale-105 transition-transform duration-300" />
              </div>

              <div className="sm:w-1/2 ">
              <p className='text-center max-w-lg mx-auto py-4 px-8 text-white text-base'>Comprometidos por un deporte extremo amigable con el medioambiente, desarrollamos la KXF-E, la primera motocross enduro convertida de combustión a 100% eléctrica, única en Chile y Latinoamérica.</p>
              </div>
        
            </div>

          </div>
          
          {/*FIN SECCION MOTO KXF*/}

          
        </div>

        {/* SECCION VIDEO */}
        <div className='pt-10'>
          <h1 className='animate-slide-left text-left px-6 text-neutral-100 font-bold text-4xl pb-8 sm:text-center'><span className='font-bold text-5xl'>Únete</span> a la <span className='text-amarillo'>Revolución Eléctrica</span> sobre dos ruedas</h1>
          <div className="w-full max-w-4xl sm:w-full md:w-4/5 lg:w-4/5 xl:w-3/4 mx-auto">
            <div className="iframe-container">
              <iframe
                className=" w-full h-full"
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
    {showScrollBtn && (
      <button
        className={`fixed ${isButtonAbsolute ? 'mb-64' : 'mb-4'}  right-4  rounded-full`}
        onClick={scrollToPresentation}
      >
        🢁
      </button>
    )}



    <div>
      <Footer />
    </div>    
    </>
  )
}

export default Home
