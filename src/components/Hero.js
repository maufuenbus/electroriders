import React from 'react'
import  motoCross from '../assest/img/motocross.jpg'

function Hero() {
  return (
    <>
    <div className="relative">
      <img className='w-full h-screen object-cover' src={motoCross} alt="Imagen de MotoCross" />
      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
          <button className="btn-outline btn-warning btn btn-lg sm:btn-sm md:btn-md lg:btn-lg w-1/6 mt-72">Ingresar</button>
      </div>
    </div>

    </>
  )
}

export default Hero