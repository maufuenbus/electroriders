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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  return (
    <>
      <Header />
      <div className="p-10 bg-black-100 flex">
        <div className="flex-1">
          {/*EN ESTE DIV VA EL CONTENIDO DE LA PAGINA*/}
        </div>
        
        <div className="flex-none w-1/3">
          <form className="bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="name">Nombre:</label>
              <input type="text" name="name" id="name" placeholder="Escribe tu nombre" className="w-full border rounded-md p-2" value={formData.name} onChange={handleChange}/>
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="email">Correo electrónico: </label>
              <input type="email" name="email" id="email" placeholder="Escribe tu correo" className="w-full border rounded-md p-2" value={formData.email} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="message"> Mensaje: </label>
              <textarea name="message" id="message" rows="4" placeholder="Escribe tu mensaje" className="w-full border rounded-md p-2" value={formData.message} onChange={handleChange} ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full"> Enviar </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contacto;
