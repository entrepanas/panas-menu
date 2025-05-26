// src/App.js
import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import menuData from './menuData.json';

import CategoriaCard from './components/CategoriaCard';
import OptimizedImage from './components/OptimizedImage';
import Logo from './assets/logo.webp';



function App() {
  const [categoriaAbierta, setCategoriaAbierta] = useState(null);

  const handleCategoriaClick = useCallback((id) => {
    setCategoriaAbierta(prev => (prev === id ? null : id));
  }, []);

  const categorias = useMemo(() => menuData.categorias, []);

  return (
    <div className="app">
      <header className="app-header">
        <div className="title-container">
          <OptimizedImage
          src={Logo}
          alt="logo"
          className="logo-image"
          loading="eager"
           width={50}
           height={50}
        />
          <h1 className="restaurant-title">MENÚ</h1>
        </div>
      </header>

      <main className="main-content">
        <div className="categorias-grid">
          {categorias.map(categoria => (
            <CategoriaCard
              key={categoria.id}
              categoria={categoria}
              isOpen={categoriaAbierta === categoria.id}
              onClick={handleCategoriaClick}
            />
          ))}
        </div>
      </main>

        <div className="footer">
          <p>© 2025 Entre Panas. All rights reserved.</p> 
        </div>

    </div>
  );
}

export default App;
