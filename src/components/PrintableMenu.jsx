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
      padding: '30px 40px',
      minHeight: '297mm',
      maxHeight: '297mm',
      width: '210mm',
      margin: '0 auto',
      pageBreakAfter: 'always',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    },
    lastPage: {
      pageBreakAfter: 'auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '25px',
      padding: '20px 0',
      borderBottom: '3px solid #e63946',
      backgroundColor: '#f5f5f5',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '10px',
    },
    logo: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      border: '3px solid #e63946',
      padding: '5px',
      backgroundColor: '#ffffff',
    },
    title: {
      fontSize: '2.8rem',
      color: '#e63946',
      fontWeight: '900',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      margin: '0',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#f77f00',
      fontWeight: '600',
      marginTop: '8px',
    },
    categoriesContainer: {
      flex: 1,
      overflow: 'hidden',
    },
    categorySection: {
      marginBottom: '20px',
      pageBreakInside: 'avoid',
      breakInside: 'avoid',
    },
    categoryTitle: {
      fontSize: '2rem',
      fontWeight: '900',
      color: '#e63946',
      textTransform: 'uppercase',
      borderBottom: '2px solid #e63946',
      paddingBottom: '8px',
      marginBottom: '15px',
      letterSpacing: '1px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '12px',
      marginBottom: '15px',
    },
    item: {
      backgroundColor: '#f9f9f9',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '12px 15px',
      pageBreakInside: 'avoid',
      breakInside: 'avoid',
      display: 'flex',
      flexDirection: 'column',
    },
    itemHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '6px',
      gap: '10px',
    },
    itemName: {
      fontSize: '1.1rem',
      fontWeight: '700',
      color: '#333333',
      flex: '1',
      lineHeight: '1.2',
    },
    itemPrice: {
      fontSize: '1.2rem',
      fontWeight: '800',
      color: '#f77f00',
      whiteSpace: 'nowrap',
      flexShrink: 0,
    },
    itemDesc: {
      fontSize: '0.85rem',
      color: '#555555',
      lineHeight: '1.3',
    },
    footer: {
      marginTop: '20px',
      padding: '15px',
      borderTop: '2px solid #e63946',
      textAlign: 'center',
      color: '#666666',
      fontSize: '0.9rem',
    },
    beverageGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px',
    },
    beverageItem: {
      backgroundColor: '#f9f9f9',
      border: '1px solid #e0e0e0',
      borderRadius: '6px',
      padding: '10px',
      textAlign: 'center',
      pageBreakInside: 'avoid',
    },
    beverageName: {
      fontSize: '0.95rem',
      fontWeight: '700',
      color: '#333333',
      marginBottom: '5px',
    },
    beverageDesc: {
      fontSize: '0.75rem',
      color: '#666666',
      marginBottom: '5px',
    },
    beveragePrice: {
      fontSize: '1.1rem',
      fontWeight: '800',
      color: '#f77f00',
    },
    pageNumber: {
      position: 'absolute',
      bottom: '15px',
      right: '40px',
      fontSize: '0.8rem',
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

  // Organizar categorías por páginas manualmente para evitar cortes
  // Página 1: Maicitos, Salchipapa, Parrillas
  // Página 2: Bebidas, Picadas, Entradas, Perros
  // Página 3: Burgers, Brochetas, Maicitos adicionales

  const page1Categories = [];
  const page2Categories = [];
  const page3Categories = [];

  categorias.forEach((categoria, index) => {
    const catName = categoria.nombre.toLowerCase();
    
    if (catName.includes('maicito') && page1Categories.length < 2) {
      page1Categories.push(categoria);
    } else if (catName.includes('salchipapa') || catName.includes('parrilla')) {
      page1Categories.push(categoria);
    } else if (catName.includes('bebida') || catName.includes('picada') || 
               catName.includes('entrada') || catName.includes('perro')) {
      page2Categories.push(categoria);
    } else {
      page3Categories.push(categoria);
    }
  });

  if (page1Categories.length > 3) {
    page2Categories.unshift(page1Categories.pop());
  }
  if (page2Categories.length > 4) {
    page3Categories.unshift(page2Categories.pop());
  }

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
        </div>

        <footer style={printStyles.footer}>
          <p style={{ fontSize: '0.95rem', marginBottom: '3px' }}>
            © 2025 Entre Panas Burger - Todos los derechos reservados
          </p>
          <p style={{ fontSize: '0.85rem' }}>
            Precios sujetos a cambios sin previo aviso
          </p>
        </footer>
        
        <span style={printStyles.pageNumber}>Página 3 de 3</span>
      </div>
    </div>
  );
});

PrintableMenu.displayName = 'PrintableMenu';

export default PrintableMenu;