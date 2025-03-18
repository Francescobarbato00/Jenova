import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function StickyHeaderMobile() {
  const [showHeader, setShowHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disabilita lo scroll quando il menu è aperto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Chiude il menu cliccando sull'overlay
  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Header Mobile */}
      <header
        className={`fixed top-0 left-0 w-full p-4 bg-white text-black flex justify-between items-center md:hidden z-50 shadow-md border-b transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <div className="text-lg font-bold tracking-wide">
          Junior Jenova Space
        </div>

        {/* Bottone Menu */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-black focus:outline-none z-50"
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Fullscreen Menu Overlay (z-index più alto dell'header) */}
      <div
        onClick={handleOverlayClick}
        className={`fixed top-0 left-0 w-full h-full bg-white text-black z-[9999] transform transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Contenuto del menu: stoppa la propagazione del click per evitare chiusure involontarie */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col justify-center items-center h-full relative"
        >
          {/* Bottone Chiudi in alto a destra */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-black focus:outline-none"
          >
            <X size={32} />
          </button>

          {/* Logo (opzionale) */}
          <h2 className="text-2xl font-bold mb-8">
            Junior Jenova Space
          </h2>

          {/* Links */}
          <nav>
            <ul className="flex flex-col items-center space-y-8 text-xl font-medium">
              <li>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-700 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-700 transition-colors"
                >
                  Per le Aziende
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-700 transition-colors"
                >
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-700 transition-colors"
                >
                  Contatti
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
