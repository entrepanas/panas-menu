// src/components/PlatilloCard.jsx
import React from 'react';
import OptimizedImage from './OptimizedImage';
import '../App.css';
import ImagenMock from '../assets/salchi.webp';

const PlatilloCard = React.memo(({ platillo }) => (
  <div className="platillo-card">
    <OptimizedImage
      src={ImagenMock}
      //src={platillo.imagen}
      alt={platillo.nombre}
      className="platillo-image"
    />
    <h3 className="platillo-nombre">{platillo.nombre}</h3>
    <p className="platillo-descripcion">{platillo.descripcion}</p>
    <p className="platillo-precio">{platillo.precio}</p>
  </div>
));

export default PlatilloCard;
