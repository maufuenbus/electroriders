import React from "react";
import motoCross from "../../assest/img/motocross.jpg";
import logo from "../../assest/img/logo.png";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="relative">
        <img
          className="absolute top-40 left-40 w-90 h-80"
          src={logo}
          alt="Logo"
        />
        <img
          className="w-full h-screen object-cover"
          src={motoCross}
          alt="Imagen de MotoCross"
        />
        <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
          <button
            onClick={handleNavigation}
            className="btn-outline bg-yellow-300 text-black btn btn-lg sm:btn-sm md:btn-md lg:btn-lg w-1/6 mt-72 glass"
          >
            Ingresar
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
