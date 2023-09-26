import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logoER-YB.png';
import marco from '../../assets/img/marco.png';

const menuItems = [
  { path: '/', label: 'Inicio' },
  { path: '/nosotros', label: 'Nosotros' },
  { path: '/servicios', label: 'Servicios' },
  { path: '/contacto', label: 'Contacto' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <header className="bg-black p-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center max-w-7xl">
          <div className="flex justify-between items-center w-full">
            <Link to="/">
                <img className="logo h-16" src={logo} alt="Logo" />
            </Link>
              <button className="menu menu-sm lg:hidden shadow bg-base-100 rounded-box" onClick={() => setIsOpen(!isOpen)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
              </button>
          </div>
          {/* Navegación */}
          <nav className={`flex flex-col lg:flex-row w-full lg:w-auto mt-2 lg:mt-0 ${isOpen ? 'block' : 'hidden'} lg:block lg:space-x-4 space-y-2 lg:space-y-0`}>
            <ul className="flex flex-col lg:flex-row">
                {menuItems.map(item => (
              <li key={item.label} className="mb-2 lg:mb-0 menu-item p-2" 
                  style={(isOpen && window.innerWidth <= 768) ? {} : { backgroundImage: `url(${marco})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                  <Link to={item.path} className="text-white hover:text-gray-300 px-6 py-3">
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
