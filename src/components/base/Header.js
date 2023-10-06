import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logoER-YB.png';
import marco from '../../assets/img/marco.png';
import '../css/stylesHeader.css';


const menuItems = [
  { path: '/', label: 'Inicio' },
  // { path: '/nosotros', label: 'Nosotros' },
  // { path: '/servicios', label: 'Servicios' },
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
    <header className="bg-neutral-900 p-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center max-w-7xl">
        <div className="flex justify-between items-center w-full">
          <Link to="/">
            <img className="logo h-12" src={logo} alt="Logo" />
          </Link>
          <button
            className="menu menu-sm lg:hidden shadow bg-base-100 rounded-box"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
        </div>
        {/* Navegación */}
        <nav
          className={`flex flex-col lg:flex-row w-full lg:w-auto mt-2 lg:mt-0 ${
            isOpen ? 'block' : 'hidden'
          } lg:block lg:space-x-4 space-y-2 lg:space-y-0`}
        >
          <ul className="flex flex-col lg:flex-row">
            {menuItems.map(item => (
              <li
                key={item.label}
                className="flex mb-2 lg:mb-0 menu-item image-position items-center relative"
                
              >
                <Link
                  to={item.path}
                  className="text-white hover:text-gray-300 z-10"
                  style={
                    isOpen && window.innerWidth <= 1080
                      ? { textAlign: 'center', alignItems: 'center' }
                      : {}
                  }
                >
                  {item.label}
                </Link>
                {/* Agrega la imagen de marco aquí */}
                <div
                  className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover opacity-0 hover:opacity-100 transition-opacity duration-100 z-0"
                  style={{
                    backgroundImage: `url(${marco})`,
                    backgroundSize: '75%',
                    backgroundPosition: '50% 0%',
                    
                  }}
                ></div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>

  );
};

export default Header;
