import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home.component';

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}; 
