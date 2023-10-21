import React from 'react';
import Header from '../base/Header';
import Footer from '../base/Footer';
import EnConstruccionImg from '../../assets/img/En-construccion.jpg';
function Servicios() {

  const servicesList = [
    { title: 'Transformación de Motores', description: 'Conversión de motos a combustión a eléctricas y kits de conversión.' },
    { title: 'Asesoría y Consultoría', description: 'Asesoramiento personalizado y capacitación sobre transformaciones eléctricas.' },
    { title: 'Mantenimiento y Reparación', description: 'Mantenimiento especializado para motos eléctricas y venta de accesorios.' },
    { title: 'Venta de Motos Eléctricas', description: 'Modelos 100% eléctricos y motos ya convertidas.' },

  ];
  return (
    <>
    <div>
      <Header />
    </div>
    <div className="bg-black p-10 text-white">
      <h2 className="text-3xl font-semibold mb-6 text-center text-amarillo">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesList.map((service, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-green-500">{service.title}</h3>
            <p>{service.description}</p>
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
