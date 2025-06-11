// src/App.js
import React, { useState, useCallback, useMemo, useRef } from 'react';
import './App.css';
import menuData from './menuData.json';

import CategoriaCard from './components/CategoriaCard';
import OptimizedImage from './components/OptimizedImage';
import Footer from './components/Footer';
import Logo from './assets/logo.webp';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PrintableMenu from './components/PrintableMenu';



function App() {
  const [isPrinting, setIsPrinting] = useState(false);
  const printRef = useRef();
  const [isHovered, setIsHovered] = useState(false);


  const pdfRef = useRef();
  const [categoriaAbierta, setCategoriaAbierta] = useState(null);

  const handleCategoriaClick = useCallback((id) => {
    setCategoriaAbierta(prev => (prev === id ? null : id));
  }, []);

  const categorias = useMemo(() => menuData.categorias, []);

  const downloadPDF = async () => {
  setIsPrinting(true);
  
  await new Promise(resolve => setTimeout(resolve, 100));
  
  try {
    const input = printRef.current;
    if (!input) {
      console.error('No se encontró el elemento para imprimir');
      setIsPrinting(false);
      return;
    }
    
    const canvas = await html2canvas(input, {
      scale: 2, 
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: '#ffffff',
      removeContainer: true,
      imageTimeout: 0,
      windowWidth: input.scrollWidth,
      windowHeight: input.scrollHeight,
    });
    
    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;
    
    let heightLeft = imgHeight;
    let position = 0;
    
    while (heightLeft > 0) {
      if (position !== 0) {
        pdf.addPage();
      }
      
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      
      heightLeft -= pdfHeight;
      position -= pdfHeight;
    }
    
    pdf.save('panas-menu.pdf');
    
  } catch (error) {
    console.error('Error generando PDF:', error);
    alert('Hubo un error al generar el PDF. Por favor, intenta de nuevo.');
  } finally {
    setIsPrinting(false);
  }
};

const printButtonStyles = {
    button: {
      backgroundColor: 'var(--brand-primary)',
      border: 'none',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(230, 57, 70, 0.4)',
      position: 'relative',
      overflow: 'hidden',
    },
    buttonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(230, 57, 70, 0.6)',
    },
    buttonActive: {
      transform: 'translateY(0)',
      boxShadow: '0 2px 8px rgba(230, 57, 70, 0.4)',
    },
    buttonDisabled: {
      opacity: '0.6',
      cursor: 'not-allowed',
    },
    icon: {
      width: '24px',
      height: '24px',
      color: 'white',
    },
    tooltip: {
      position: 'absolute',
      bottom: '-35px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '6px',
      fontSize: '0.75rem',
      whiteSpace: 'nowrap',
      opacity: '0',
      transition: 'opacity 0.3s ease',
      pointerEvents: 'none',
    },
    tooltipVisible: {
      opacity: '1',
    },
  };

  return (
    <div className="app" ref={pdfRef}>
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
           {/* Botón de impresión con ícono */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={downloadPDF}
              disabled={isPrinting}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                ...printButtonStyles.button,
                ...(isHovered && !isPrinting ? printButtonStyles.buttonHover : {}),
                ...(isPrinting ? printButtonStyles.buttonDisabled : {}),
              }}
              onMouseDown={(e) => {
                if (!isPrinting) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(230, 57, 70, 0.4)';
                }
              }}
              onMouseUp={(e) => {
                if (!isPrinting && isHovered) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(230, 57, 70, 0.6)';
                }
              }}
              aria-label="Descargar menú en PDF"
            >
              {isPrinting ? (
                // Ícono de carga
                <svg 
                  style={{ ...printButtonStyles.icon, animation: 'spin 1s linear infinite' }}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path d="M9 12l2 2 4-4" strokeOpacity="0.3" />
                </svg>
              ) : (
                // Ícono de impresora
                <svg 
                  style={printButtonStyles.icon}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
              )}
            </button>
            
            {/* Tooltip */}
            <span 
              style={{
                ...printButtonStyles.tooltip,
                ...(isHovered && !isPrinting ? printButtonStyles.tooltipVisible : {}),
              }}
            >
              {isPrinting ? 'Generando PDF...' : 'Descargar menú PDF'}
            </span>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="categorias-grid">
          {categorias.map(categoria => (
            <CategoriaCard
              key={categoria.id}
              categoria={categoria}
              isOpen={categoriaAbierta === 'all' || categoriaAbierta === categoria.id}
              onClick={handleCategoriaClick}
            />
          ))}
        </div>
      </main>

      <Footer />

      {isPrinting && (
        <div style={{ position: 'absolute', left: '-9999px', top: '0', zIndex: -1 }}>
          <PrintableMenu ref={printRef} categorias={categorias} logo={Logo} />
        </div>
      )}
      
    </div>
  );
}

export default App;
