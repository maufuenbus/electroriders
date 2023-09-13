import React from 'react';

import { Routes, Route } from "react-router-dom";
import './index.css';
import Hero from './components/pages/Hero';
import Home from './components/pages/Home'; 
import Nosotros from './components/pages/Nosotros'; 
import Contacto from './components/pages/Contacto'; 

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
        </Routes>
    </div>
    
  );
}

export default App;
