import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-white">ElectroRiders</h1>
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white hover:text-gray-300">Inicio</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Nosotros</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Servicios</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;