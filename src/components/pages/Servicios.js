import React from 'react';
import Header from '../base/Header';
import Footer from '../base/Footer';
import asesoria from "../../assets/img/asesoria.jpg";
import venta from "../../assets/img/venta.jpg";
import mantenimiento2 from "../../assets/img/mantenimiento2.jpg";
import conversion2 from "../../assets/img/conversion2.jpg";




function Servicios() {

  const servicesList = [
    { title: 'Transformación de Motores', description: 'Conversión de motos a combustión a eléctricas y kits de conversión.', imagen: conversion2  },
    { title: 'Asesoría y Consultoría', description: 'Asesoramiento personalizado y capacitación sobre transformaciones eléctricas.', imagen: asesoria },
    { title: 'Mantenimiento y Reparación', description: 'Mantenimiento especializado para motos eléctricas y venta de accesorios.', imagen: mantenimiento2 },
    { title: 'Venta de Motos Eléctricas', description: 'Modelos 100% eléctricos y motos ya convertidas.', imagen: venta },

  ];
  return (
    <>
    <div>
      <Header />
    </div>
    <div className="bg-fondo p-10 text-white max-w-4xl mx-auto">
      <h1 className='text-center t-100 text-neutral-100 font-bold text-4xl pb-8' data-aos='fade-right'><span className='font-bold text-3xl'>Nuestros</span><span className='text-amarillo'> Servicios</span></h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesList.map((service, index) => (
          <div key={index} className="p-6 bg-neutral-800 rounded-lg shadow-lg border-verde border">
            <h3 className="text-xl font-bold mb-4 text-amarillo text-center">{service.title}</h3>
            <img src={service.imagen} alt="Album" className="rounded-lg w-72 mx-auto mb-6" data-aos="zoom-in" />

            <p className='text-center'>{service.description}</p>

          </div>
        ))}
      </div>
    </div>
    <div>
      <Footer />
    </div>    
    </>
  )
}

export default Servicios
