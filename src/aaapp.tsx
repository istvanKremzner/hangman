import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Game, Home } from './pages';

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </div>
  );
}; 
