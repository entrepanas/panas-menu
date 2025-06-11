// src/components/PrintableMenu.jsx
import React from 'react';
import '../App.css'; // Reutilizamos algunos estilos
import OptimizedImage from './OptimizedImage';


// Este componente renderiza el menú completo en un formato de dos columnas para el PDF.
// No se muestra en la pantalla, solo se usa para la captura de html2canvas.
const PrintableMenu = React.forwardRef(({ categorias, logo }, ref) => {
  
  // Estilos inline para controlar el layout de impresión
  const printStyles = {
    container: {
      padding: '40px',
      backgroundColor: 'white',
      color: 'black',
      width: '210mm', // Ancho de una hoja A4
      minHeight: '297mm', // Alto de una hoja A4 para asegurar que el canvas sea grande
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: '2px solid #eee',
      paddingBottom: '20px'
    },
    logo: {
      width: '80px',
      height: '80px',
      marginRight: '20px'
    },
    title: {
      fontSize: '2.5rem',
      color: '#d32f2f', // Usamos un color base para impresión
      fontFamily: 'var(--font-display)',
      fontWeight: '900',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)', // La clave: dos columnas
      gap: '25px',
    },
    categoryTitle: {
      gridColumn: '1 / -1', // El título de categoría ocupa ambas columnas
      fontSize: '1.8rem',
      fontWeight: '800',
      color: '#d32f2f',
      borderBottom: '2px solid #eee',
      paddingBottom: '10px',
      marginTop: '20px',
    },
    item: {
      border: '1px solid #f0f0f0',
      padding: '15px',
      borderRadius: '8px',
      breakInside: 'avoid', // Evita que la tarjeta se corte entre páginas
    },
    itemName: {
      fontSize: '1.1rem',
      fontWeight: '700',
      color: '#333',
    },
    itemDesc: {
      fontSize: '0.9rem',
      color: '#666',
      marginTop: '5px',
      marginBottom: '10px',
    },
    itemPrice: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'right',
    }
  };

  return (
    <div ref={ref} style={printStyles.container}>
      <header style={printStyles.header}>
        <img src={logo} alt="Logo" style={printStyles.logo} />
        <h1 style={printStyles.title}>Nuestro Menú</h1>
      </header>
      <div style={printStyles.grid}>
        {categorias.map(categoria => (
          <React.Fragment key={`print-${categoria.id}`}>
            <h2 style={printStyles.categoryTitle}>{categoria.nombre}</h2>
            {categoria.platillos.map(platillo => (
              <div key={`print-item-${platillo.id}`} style={printStyles.item}>
                <h3 style={printStyles.itemName}>{platillo.nombre}</h3>
                <OptimizedImage
                  src={platillo.imagen}
                  alt={platillo.nombre}
                  className="platillo-image"
                />
                <p style={printStyles.itemDesc}>{platillo.descripcion}</p>
                <p style={printStyles.itemPrice}>{platillo.precio}</p>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
});

export default PrintableMenu;