// components/Hero.js

import React from 'react';

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        // Stili desktop invariati
        backgroundImage: 'url("/sfondo.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: '#fff'
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .fadeIn {
          animation: fadeIn 2s ease-in-out forwards;
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .slideUp {
          animation: slideUp 2s ease-in-out forwards;
        }

        /* Media query per rendere la Hero responsive */
        @media (max-width: 768px) {
          .hero-section {
            /* Mantiene l'altezza dell'intero viewport su mobile */
            min-height: 100vh !important;
            /* Centra il background orizzontalmente */
            background-position: center !important;
            /* Riduce il padding laterale per evitare tagli del testo */
            padding: 20px !important;
          }
          .hero-container {
            margin-left: 0 !important;
            padding: 20px 0 !important;
          }
          .hero-title {
            font-size: 48px !important;
            line-height: 56px !important;
            margin-bottom: 16px !important;
          }
          .hero-paragraph {
            font-size: 20px !important;
            line-height: 28px !important;
          }
        }
      `}</style>

      <div
        className="hero-container"
        style={{
          maxWidth: '700px',
          marginLeft: '60px',
          padding: '40px 0'
        }}
      >
        <h1
          className="hero-title fadeIn"
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontWeight: 600,
            fontSize: '80px',
            lineHeight: '88px',
            marginBottom: '24px'
          }}
        >
          Con Jenova <br />
          il cambiamento <br />
          è opportunità
        </h1>

        <p
          className="hero-paragraph slideUp"
          style={{
            fontFamily: 'Helvetica, sans-serif',
            fontWeight: 400,
            fontSize: '30px',
            lineHeight: '42px'
          }}
        >
          Rivoluziona il tuo Business con la nostra <br />
          Passione e Professionalità
        </p>
      </div>
    </section>
  );
}
