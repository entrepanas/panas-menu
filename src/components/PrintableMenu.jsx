// src/components/PrintableMenu.jsx
import React from 'react';
import '../App.css';

const PrintableMenu = React.forwardRef(({ categorias, logo }, ref) => {
  
  const printStyles = {
    container: {
      backgroundColor: '#ffffff',
      color: '#000000',
      width: '100%',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      boxSizing: 'border-box',
    },
    page: {
      padding: '25px 35px',
      minHeight: '297mm',
      width: '210mm',
      margin: '0 auto',
      pageBreakAfter: 'always',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    },
    lastPage: {
      pageBreakAfter: 'auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
      padding: '15px 0',
      borderBottom: '2px solid #e63946',
      backgroundColor: '#f5f5f5',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '15px',
      marginBottom: '8px',
    },
    logo: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      border: '2px solid #e63946',
      padding: '4px',
      backgroundColor: '#ffffff',
    },
    title: {
      fontSize: '2.2rem',
      color: '#e63946',
      fontWeight: '900',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      margin: '0',
    },
    subtitle: {
      fontSize: '0.9rem',
      color: '#f77f00',
      fontWeight: '600',
      marginTop: '5px',
    },
    categoriesContainer: {
      flex: 1,
    },
    categorySection: {
      marginBottom: '10px',
      pageBreakInside: 'avoid',
      breakInside: 'avoid',
    },
    categoryTitle: {
      fontSize: '1.5rem',
      fontWeight: '900',
      color: '#e63946',
      textTransform: 'uppercase',
      borderBottom: '2px solid #e63946',
      paddingBottom: '5px',
      marginBottom: '10px',
      letterSpacing: '0.5px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '8px',
      marginBottom: '5px',
    },
    item: {
      backgroundColor: '#f9f9f9',
      border: '1px solid #e0e0e0',
      borderRadius: '6px',
      padding: '8px 12px',
      pageBreakInside: 'avoid',
      breakInside: 'avoid',
      display: 'flex',
      flexDirection: 'column',
    },
    itemHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '4px',
      gap: '8px',
    },
    itemName: {
      fontSize: '0.95rem',
      fontWeight: '700',
      color: '#333333',
      flex: '1',
      lineHeight: '1.1',
    },
    itemPrice: {
      fontSize: '1rem',
      fontWeight: '800',
      color: '#f77f00',
      whiteSpace: 'nowrap',
      flexShrink: 0,
    },
    itemDesc: {
      fontSize: '0.75rem',
      color: '#555555',
      lineHeight: '1.2',
    },
    footer: {
      marginTop: '10px',
      padding: '8px',
      borderTop: '2px solid #e63946',
      textAlign: 'center',
      color: '#666666',
      fontSize: '0.8rem',
    },
    beverageGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '8px',
    },
    beverageItem: {
      backgroundColor: '#f9f9f9',
      border: '1px solid #e0e0e0',
      borderRadius: '5px',
      padding: '8px',
      textAlign: 'center',
      pageBreakInside: 'avoid',
    },
    beverageName: {
      fontSize: '0.85rem',
      fontWeight: '700',
      color: '#333333',
      marginBottom: '3px',
    },
    beverageDesc: {
      fontSize: '0.7rem',
      color: '#666666',
      marginBottom: '3px',
    },
    beveragePrice: {
      fontSize: '0.95rem',
      fontWeight: '800',
      color: '#f77f00',
    },
    pageNumber: {
      position: 'absolute',
      bottom: '10px',
      right: '35px',
      fontSize: '0.75rem',
      color: '#999999',
    },
  };

  const formatPrice = (precio) => {
    if (typeof precio === 'string') return precio;
    return `$${precio.toLocaleString('es-CO')}`;
  };

  const isBeverageCategory = (categoryName) => {
    const beverageKeywords = ['bebida', 'bebidas', 'drinks', 'refrescos'];
    return beverageKeywords.some(keyword => 
      categoryName.toLowerCase().includes(keyword)
    );
  };

  // Reorganizar categorías manualmente para una distribución óptima en 3 páginas
  // Basado en el menuData.json que tiene 10 categorías
  const page1Categories = [];
  const page2Categories = [];
  const page3Categories = [];
  
  // Distribuir manualmente basado en el orden y tamaño de las categorías
  categorias.forEach((categoria, index) => {
    const catName = categoria.nombre.toLowerCase();
    
    // Página 1: Entradas (3 items), Burgers (6 items), Perros (3 items) = 12 items
    if (catName.includes('entrada') || catName.includes('burger') || catName.includes('perro')) {
      page1Categories.push(categoria);
    }
    // Página 2: Brochetas (3 items), Maicitos (3 items), Salchipapa (4 items) = 10 items
    else if (catName.includes('brocheta') || catName.includes('maicito') || catName.includes('salchipapa') || catName.includes('picadas') ) {
      page2Categories.push(categoria);
    }
    // Página 3: Parrilladas (3 items), Croquetas (3 items), Bebidas (7 items) = 16 items
    else {
      page3Categories.push(categoria);
    }
  });

  const renderCategories = (categoriasToRender) => {
    return categoriasToRender.map((categoria) => {
      const isBeverage = isBeverageCategory(categoria.nombre);
      
      return (
        <div key={`print-${categoria.id}`} style={printStyles.categorySection}>
          <h2 style={printStyles.categoryTitle}>{categoria.nombre}</h2>
          
          {isBeverage ? (
            <div style={printStyles.beverageGrid}>
              {categoria.platillos.map(platillo => (
                <div key={`print-item-${platillo.id}`} style={printStyles.beverageItem}>
                  <h3 style={printStyles.beverageName}>{platillo.nombre}</h3>
                  {platillo.descripcion && (
                    <p style={printStyles.beverageDesc}>
                      {platillo.descripcion}
                    </p>
                  )}
                  <p style={printStyles.beveragePrice}>{formatPrice(platillo.precio)}</p>
                </div>
              ))}
            </div>
          ) : (
            <div style={printStyles.grid}>
              {categoria.platillos.map((platillo) => (
                <div key={`print-item-${platillo.id}`} style={printStyles.item}>
                  <div style={printStyles.itemHeader}>
                    <h3 style={printStyles.itemName}>{platillo.nombre}</h3>
                    <p style={printStyles.itemPrice}>{formatPrice(platillo.precio)}</p>
                  </div>
                  
                  {platillo.descripcion && (
                    <p style={printStyles.itemDesc}>{platillo.descripcion}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div ref={ref} style={printStyles.container}>
      {/* Página 1 */}
      <div style={printStyles.page}>
        <header style={printStyles.header}>
          <div style={printStyles.logoContainer}>
            <img src={logo} alt="Entre Panas Burger" style={printStyles.logo} />
          </div>
          <h1 style={printStyles.title}>Nuestro Menú</h1>
          <p style={printStyles.subtitle}>Las mejores hamburguesas de la ciudad</p>
        </header>

        <div style={printStyles.categoriesContainer}>
          {renderCategories(page1Categories)}
        </div>
        
        <span style={printStyles.pageNumber}>Página 1 de 3</span>
      </div>

      {/* Página 2 */}
      <div style={printStyles.page}>
        <div style={printStyles.categoriesContainer}>
          {renderCategories(page2Categories)}
        </div>
        
        <span style={printStyles.pageNumber}>Página 2 de 3</span>
      </div>

      {/* Página 3 */}
      <div style={{...printStyles.page, ...printStyles.lastPage}}>
        <div style={printStyles.categoriesContainer}>
          {renderCategories(page3Categories)}
          
          {/* Footer al final del contenido de la página 3 */}
          <footer style={{...printStyles.footer, marginTop: '10px'}}>
            
          </footer>
        </div>
        
        <span style={printStyles.pageNumber}>Página 3 de 3</span>
      </div>
    </div>
  );
});

PrintableMenu.displayName = 'PrintableMenu';

export default PrintableMenu;