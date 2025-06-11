// src/components/CategoriaCard.jsx
import React, { useCallback } from 'react';
import OptimizedImage from './OptimizedImage';
import PlatilloCard from './PlatilloCard';
import '../App.css';


const CategoriaCard = React.memo(({ categoria, isOpen, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(categoria.id);
  }, [categoria.id, onClick]);

  return (
    <div className={`categoria-container ${isOpen ? 'open' : ''}`}>
      <div className="categoria-card" onClick={handleClick}>
        <OptimizedImage
          src={categoria.imagen}
          alt={categoria.nombre}
          className="categoria-image"
          loading="eager"
        />
        <h2 className="categoria-nombre">{categoria.nombre}</h2>
      </div>

      {isOpen && (
        <div className="platillos-container">
          {categoria.platillos.map(platillo => (
            <PlatilloCard key={platillo.id} platillo={platillo} />
          ))}
        </div>
      )}
    </div>
  );
});

export default CategoriaCard;
