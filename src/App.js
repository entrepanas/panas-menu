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

  const pdfRef = useRef();
  const [categoriaAbierta, setCategoriaAbierta] = useState(null);

  const handleCategoriaClick = useCallback((id) => {
    setCategoriaAbierta(prev => (prev === id ? null : id));
  }, []);

  const categorias = useMemo(() => menuData.categorias, []);

const downloadPDF = () => {
    setCategoriaAbierta('all');
    setIsPrinting(true);

    setTimeout(() => {
      const input = printRef.current;
      if (!input) {
        setIsPrinting(false);
        return;
      }
      
      // html2canvas ahora capturará el div con el fondo oscuro y las fuentes correctas.
      html2canvas(input, {
        scale: 1.5, // Una escala de 1.5 es suficiente y más rápida
        useCORS: true, // Importante para cargar la imagen de fondo
        allowTaint: true,
      }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const ratio = pdfWidth / canvas.width;
        const scaledImgHeight = canvas.height * ratio;
        
        let heightLeft = scaledImgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, scaledImgHeight);
        heightLeft -= pdfHeight;

        while (heightLeft > 0) {
          position = -heightLeft;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, scaledImgHeight);
          heightLeft -= pdfHeight;
        }
        
        pdf.save('menu-entre-panas-web.pdf');
        setCategoriaAbierta(null);
        setIsPrinting(false);
      });
    }, 500);
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
          <button onClick={downloadPDF}>PDF</button>
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
