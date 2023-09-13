import React from 'react';

import { Routes, Route } from "react-router-dom";
import './index.css';
import Hero from './components/pages/Hero';
import Home from './components/pages/Home'; 

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    </div>
    
  );
}

export default App;
