// components/LogosCarousel.js

import React, { useState, useEffect, useRef, useMemo } from 'react';

export default function LogosCarousel() {
  // Array originale
  const logos = ['/1.svg', '/2.svg', '/3.svg', '/4.svg', '/5.svg'];

  // Valore di default: 3 loghi per la versione desktop
  const [visibleLogos, setVisibleLogos] = useState(3);

  // Al mount e al resize, controlliamo la larghezza dello schermo:
  // - se è sotto i 768px, passiamo a 2 loghi (o 1, se preferisci)
  // - altrimenti restiamo a 3
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setVisibleLogos(2); // oppure 1 se vuoi mostrarne solo uno su mobile
      } else {
        setVisibleLogos(3);
      }
    }

    // Chiamata iniziale e listener
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Array esteso per l’effetto “infinito”
  const extendedLogos = useMemo(
    () => [...logos, ...logos.slice(0, visibleLogos)],
    [logos, visibleLogos]
  );

  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Misura la larghezza del container
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calcola la larghezza di ogni “slot” in base a visibleLogos
  const slotWidth = containerWidth / visibleLogos;
  // Il massimo indice raggiungibile nell’array esteso
  const maxIndex = extendedLogos.length - visibleLogos;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false);

  // Gestione drag
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Auto-scroll
  const autoScrollIntervalRef = useRef(null);
  const startAutoScroll = () => {
    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex < maxIndex) {
          return prevIndex + 1;
        }
        return prevIndex;
      });
    }, 3000);
  };
  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  // Avvia auto-scroll se non stiamo facendo drag
  useEffect(() => {
    if (!isDragging && containerWidth) {
      startAutoScroll();
    }
    return () => stopAutoScroll();
  }, [isDragging, containerWidth]);

  // Se l’indice raggiunge maxIndex, dopo la transizione lo resettiamo a 0
  useEffect(() => {
    if (currentIndex === maxIndex && !isDragging) {
      const timeout = setTimeout(() => {
        setDisableTransition(true);
        setCurrentIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isDragging, maxIndex]);

  // Dopo il reset, riabilitiamo la transizione
  useEffect(() => {
    if (disableTransition) {
      const timeout = setTimeout(() => {
        setDisableTransition(false);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [disableTransition]);

  // Funzioni per il drag
  const handleMouseDown = e => {
    stopAutoScroll();
    setIsDragging(true);
    setStartPosition(e.clientX);
  };
  const handleMouseMove = e => {
    if (!isDragging) return;
    const offset = e.clientX - startPosition;
    setDragOffset(offset);
  };
  const finalizeDrag = () => {
    const threshold = slotWidth / 4;
    let newIndex = currentIndex;
    if (dragOffset > threshold && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (dragOffset < -threshold && currentIndex < maxIndex) {
      newIndex = currentIndex + 1;
    }
    setCurrentIndex(newIndex);
    setIsDragging(false);
    setDragOffset(0);
    startAutoScroll();

    if (newIndex === maxIndex) {
      const timeout = setTimeout(() => {
        setDisableTransition(true);
        setCurrentIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  };
  const handleMouseUp = () => {
    if (!isDragging) return;
    finalizeDrag();
  };
  const handleMouseLeave = () => {
    if (isDragging) finalizeDrag();
  };
  const handleTouchStart = e => {
    stopAutoScroll();
    setIsDragging(true);
    setStartPosition(e.touches[0].clientX);
  };
  const handleTouchMove = e => {
    if (!isDragging) return;
    const offset = e.touches[0].clientX - startPosition;
    setDragOffset(offset);
  };
  const handleTouchEnd = () => {
    if (!isDragging) return;
    finalizeDrag();
  };

  return (
    <section
      className="logos-carousel-section"
      style={{
        backgroundColor: '#fff',
        padding: '40px 0' // stile desktop invariato
      }}
    >
      <style>{`
        /* Esempio di piccola modifica per ridurre il padding su mobile */
        @media (max-width: 768px) {
          .logos-carousel-section {
            padding: 20px 0 !important;
          }
        }
      `}</style>

      <div
        ref={containerRef}
        style={{
          width: '100%',
          overflow: 'hidden',
          margin: '0 auto',
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            display: 'flex',
            width: `${extendedLogos.length * slotWidth}px`,
            transition: disableTransition ? 'none' : 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentIndex * slotWidth - dragOffset}px)`
          }}
        >
          {extendedLogos.map((logo, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 auto',
                width: `${slotWidth}px`,
                boxSizing: 'border-box',
                padding: '0 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={logo}
                alt={`Logo ${index}`}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
