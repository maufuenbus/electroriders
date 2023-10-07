import React, { useState } from 'react';
import Header from '../base/Header';
import Footer from '../base/Footer';

function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.text();
      console.log(data);
      
      if (response.status === 200) {
        alert('Mensaje enviado exitosamente!');
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert('Hubo un error al enviar el mensaje.');
      }

    } catch (error) {
      console.error('Hubo un error al enviar el mensaje.', error);
      alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo más tarde.');
    }
  };

  return (
    <>
      <Header />
      <div className="p-10 bg-black-100 max-w-4xl mx-auto sm:flex items-center ">
        <div className="sm:flex-1">
          <h1 className='animate-slide-left text-center px-6 text-neutral-100 font-bold text-4xl pb-8 pt-22 sm:text-center'>
            <span className='font-bold text-5xl'>¿Te interesa</span> saber más?
            <span className='text-amarillo'>¡Contáctanos!</span>
          </h1>
        </div>
        
        <div className="flex-none sm:w-1/2">
          <form className="bg-amarillo p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm text-neutral-900 mb-2 font-bold" htmlFor="name">Nombre:</label>
              <input type="text" name="name" id="name" placeholder="Escribe tu nombre" className="bg-neutral-900 w-full rounded-md p-2" value={formData.name} onChange={handleChange}/>
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2 text-neutral-900 font-bold" htmlFor="email">Correo electrónico: </label>
              <input type="email" name="email" id="email" placeholder="Escribe tu correo" className="bg-neutral-900 w-full rounded-md p-2" value={formData.email} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2 text-neutral-900 font-bold" htmlFor="message"> Mensaje: </label>
              <textarea name="message" id="message" rows="4" placeholder="Escribe tu mensaje" className="bg-neutral-900 w-full rounded-md p-2" value={formData.message} onChange={handleChange} ></textarea>
            </div>
            <button type="submit" className="btn hover:bg-neutral-50 hover:text-neutral-900 w-full border-0"> Enviar </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
