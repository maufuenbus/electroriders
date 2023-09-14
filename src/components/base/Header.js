import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-white">ElectroRiders</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-white hover:text-gray-300">Inicio</Link></li>
            <li><Link to="/nosotros" className="text-white hover:text-gray-300">Nosotros</Link></li>
            <li><Link to="/servicios" className="text-white hover:text-gray-300">Servicios</Link></li>
            <li><Link to="/contacto" className="text-white hover:text-gray-300">Contacto</Link></li>  {/* Nota: Había un error tipográfico en "contato", lo corregí a "contacto" */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
