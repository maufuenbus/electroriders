import React, { useEffect } from 'react';
import Header from '../base/Header';
import Footer from '../base/Footer';
import ariel from "../../assets/img/ariel.jpg";
//AOS (Animate On Scroll)
import AOS from "aos";
import "aos/dist/aos.css";


function Nosotros() {

  useEffect(() => {
    AOS.init({duration:1200})
  });

  return (
    <>
      <Header />

      {/* <div >
        <h1 className='text-center t-100 text-neutral-100 font-bold text-5xl pt-10' data-aos='fade-left'><span className='font-bold text-5xl'>Nuestra</span><span className='text-amarillo'> Historia</span></h1>
      </div> */}

      {/* HISTORIA */}
      <div className="p-10 bg-black-100 max-w-6xl mx-auto md:flex items-center gap-8 ">
        {/* IMAGEN */}
        <div className="md:flex-2/5 border-red-600 border-solid pb-8 md:pb-0  ">
          <h1 className='text-center t-100 text-neutral-100 font-bold text-5xl pb-8' data-aos='fade-down'><span className='font-bold text-4xl'>Nuestra</span><span className='text-amarillo'> Historia</span></h1>
          <img src={ariel} alt="Album" className="rounded-3xl w-full md:w-200" data-aos="zoom-in" />
        </div>
        
        <div className="flex-none md:w-3/5">
          <div className="border-amarillo border p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <p className='text-center max-w-lg mx-auto pb-8 px-2 text-neutral-200 text-xl' data-aos="fade-up">¡Hola! Mi nombre es Ariel Echeverría, y soy el </p>
              <p className='text-left max-w-lg mx-auto pb-8 px-0 text-neutral-200 text-lg' data-aos="fade-up">Desde que era un niño, siempre fui un apasionado de las motos. Pero con el tiempo, empecé a notar un problema importante: la contaminación acústica y ambiental causada por las motos enduro y vehículos de combustión. Este descubrimiento me llevó a adentrarme en el mundo de la <span className='text-amarillo'>Electromovilidad</span>, decidí tomar acción y me atreví a derrocar mitos.</p>

              <p className='text-left max-w-lg mx-auto px-0 text-neutral-200 text-lg' data-aos="fade-up">Después de casi dos años de arduo trabajo y dedicación, hemos desarrollado un prototipo revolucionario que ha sido muy bien recibido en Chile. Nuestra <span className='text-amarillo'>moto eléctrica</span> es la única de su tipo en el país, y estamos orgullosos de liderar la innovación en el campo de la Electromovilidad.</p>
            </div>
          </div>
        </div>
      </div>

      {/* MISION */}
      <div className="p-10 bg-black-100 max-w-4xl mx-auto md:flex items-center gap-8 ">

        <div className="md:flex-1/3 border-red-600 border-solid mb-8  ">
        <h1 className='text-center text-neutral-100 font-bold text-5xl pt-10' data-aos="fade-left"><span className='font-bold text-4xl'>Nuestra</span><span className='text-amarillo'> Misión</span></h1>
        </div>
        
        <div className="flex-none md:w-2/3">
          <div className="border-amarillo border p-8 rounded-lg shadow-lg">
            <div>
              {/* <p className='text-center max-w-lg mx-auto pb-8 px-6 text-neutral-200 text-xl' data-aos="fade-up">¡Hola! Mi nombre es Ariel Echeverría, y soy el fundador y CEO de ElectroRiders.</p> */}
              <p className='text-center max-w-lg mx-auto px-4 text-neutral-200 text-lg' data-aos="fade-up">En ElectroRiders, nuestra misión es revolucionar el mundo del deporte extremo, llevando la electromovilidad a nuevos límites, combinando adrenalina y sostenibilidad en cada aventura.</p>
            </div>
          </div>
        </div>
      </div>

      {/* MISION */}
      <div className="p-10 bg-black-100 max-w-4xl mx-auto md:flex items-center gap-8 ">

        <div className="md:flex-1/3 border-red-600 border-solid mb-8  ">
        <h1 className='text-center text-neutral-100 font-bold text-5xl pt-10' data-aos="fade-left"><span className='font-bold text-4xl'>Nuestra</span><span className='text-amarillo'> Visión</span></h1>
        </div>
        
        <div className="flex-none md:w-2/3">
          <div className="border-amarillo border p-8 rounded-lg shadow-lg">
            <div>
              {/* <p className='text-center max-w-lg mx-auto pb-8 px-6 text-neutral-200 text-xl' data-aos="fade-up">¡Hola! Mi nombre es Ariel Echeverría, y soy el fundador y CEO de ElectroRiders.</p> */}
              <p className='text-center max-w-lg mx-auto px-0 text-neutral-200 text-lg' data-aos="fade-up">Queremos ser la referencia mundial en electromovilidad extrema, inspirando pasión y sostenibilidad en cada competición y salto, allanando el camino hacia un futuro más limpio y emocionante.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Nosotros;