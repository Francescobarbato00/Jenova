// components/HeaderBlueMobile.jsx
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function HeaderBlueMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Se il menu è aperto, impediamo lo scroll della pagina
    document.body.style.overflow = !menuOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <span>Junior Jenova Space</span>
      </div>

      {/* Bottone hamburger */}
      <button className="hamburger" onClick={handleToggleMenu}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay fullscreen quando il menu è aperto */}
      <div className={`overlay ${menuOpen ? "overlay-open" : ""}`}>
        {/* Chiudiamo il menu se clicchiamo sull’area esterna */}
        <div className="overlay-bg" onClick={closeMenu}></div>

        {/* Contenuto del menu */}
        <div className="overlay-content">
          <button className="close-btn" onClick={closeMenu}>
            <X size={28} />
          </button>
          <nav className="mobile-nav">
            <ul>
              <li>
                <Link href="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/solutions" onClick={closeMenu}>
                  Per le Aziende
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={closeMenu}>
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={closeMenu}>
                  Contatti
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA */}
          <div className="cta">
            <Link href="/contact" onClick={closeMenu}>
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Stili CSS (JSX) */}
      <style jsx>{`
        /* 
          Questo header compare solo su mobile.
          A schermi >=768px non si mostra, 
          perché preferiamo usare il tuo HeaderBlue "desktop".
        */
        @media (min-width: 768px) {
          .header {
            display: none;
          }
        }

        .header {
          position: relative;
          width: 100%;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #0033cc;
          color: #fff;
          z-index: 1000;
        }

        .logo span {
          font-size: 18px;
          font-weight: bold;
          font-family: "Inter Tight", sans-serif;
        }

        .hamburger {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          z-index: 1001;
        }

        /* Overlay fullscreen (inizialmente nascosto) */
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          pointer-events: none; /* Disabilita i click finché non è aperto */
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 9999;
        }
        .overlay-open {
          pointer-events: auto;
          opacity: 1;
        }

        /* Sfondo cliccabile per chiudere */
        .overlay-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0033cc;
          opacity: 0.95;
        }

        /* Contenuto del menu */
        .overlay-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 10000;
          color: #fff;
          width: 80%;
          max-width: 300px;
        }

        .close-btn {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          align-self: flex-end;
          margin-bottom: 24px;
        }

        .mobile-nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
          text-align: center;
        }

        .mobile-nav li {
          margin: 16px 0;
        }

        .mobile-nav li a {
          color: #fff;
          text-decoration: underline;
          font-family: "Inter Tight", sans-serif;
          font-size: 18px;
        }

        .mobile-nav li a:hover {
          color: #d1d1ff;
        }

        .cta {
          margin-top: 32px;
        }

        .cta a {
          background-color: #fff;
          padding: 10px 20px;
          border-radius: 4px;
          color: #0033cc;
          text-decoration: none;
          font-weight: bold;
          font-family: "Inter Tight", sans-serif;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .cta a:hover {
          background-color: #f0f0f0;
          transform: translateY(-2px);
        }
      `}</style>
    </header>
  );
}
