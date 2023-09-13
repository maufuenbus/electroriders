import React from "react";
import motoCross from "../../assets/img/motocross.jpg";
import logo from "../../assets/img/logo1.png";
import '../css/stylesHero.css'
import { useNavigate } from "react-router-dom";


function Hero() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="relative">
  <div className="contenedor-logo">
    <img
      className="logo"
      src={logo}
      alt="Logo"
    />
  </div>
  <img
    className="background-image "
    src={motoCross}
    alt="Imagen de MotoCross"
  />
  <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
    <button
      onClick={handleNavigation}
      className="btn btn-warning glass bg-yellow-300 text-black w-1/10 mt-72"
    >
      Ingresar
    </button>
  </div>
</div>
    </>
  );
}

export default Hero;
