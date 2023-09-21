import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo1.png';
import marco from '../../assets/img/marco.png';

const menuItems = [
  { path: '/', label: 'Inicio' },
  { path: '/nosotros', label: 'Nosotros' },
  { path: '/servicios', label: 'Servicios' },
  { path: '/contacto', label: 'Contacto' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        
        <div className="flex justify-between w-full">
          <Link to="/">
            <img className="logo h-12" src={logo} alt="Logo" />
          </Link>
          
          {/* Botón menu */}
          <button className="menu menu-sm lg:hidden mt-3 lg:mt-0 shadow bg-base-100 rounded-box" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
        </div>


        {/* Navegación menu*/}
        <nav className={`flex flex-col lg:flex-row w-full lg:w-auto mt-2 lg:mt-0 ${isOpen ? 'block' : 'hidden'} lg:block lg:space-x-4 space-y-2 lg:space-y-0`}>
          <ul className="flex flex-col lg:flex-row">
            {menuItems.map(item => (
              <li key={item.label} className="mb-2 lg:mb-0" style={isOpen ? {} : { backgroundImage: `url(${marco})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                <Link to={item.path} className="text-white hover:text-gray-300 px-4 py-2 block">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
