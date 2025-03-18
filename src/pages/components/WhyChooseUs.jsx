// components/WhyChooseUs.js

import React from 'react';

export default function WhyChooseUs() {
  return (
    <section
      className="why-choose-us-section"
      style={{
        backgroundColor: '#fff',   // sfondo bianco
        padding: '80px 20px',      // spaziatura interna
        textAlign: 'left'          // testo allineato a sinistra (desktop)
      }}
    >
      <style>{`
        /* Stili comuni */
        .why-choose-us-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .why-choose-us-title {
          font-family: "Inter Tight", sans-serif;
          font-weight: 700;
          font-size: 42px;
          line-height: 58px;
          color: #0F0F0F;
          margin-bottom: 40px;
        }
        .ctaButton {
          display: inline-block;
          background-color: #E8ECFF;
          padding: 14px 28px;
          border-radius: 6px;
          color: #0F0F0F;
          text-decoration: none;
          font-family: "Inter Tight", sans-serif;
          font-weight: 600;
          font-size: 18px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .ctaButton:hover {
          background-color: #1E40AF; /* Blu scuro in hover */
          color: #ffffff;            /* Testo bianco in hover */
        }

        /* Media Query per versioni responsive */
        @media (max-width: 768px) {
          .why-choose-us-section {
            /* Riduciamo il padding per non comprimere il contenuto */
            padding: 40px 20px !important;
            text-align: center !important; /* facoltativo se preferisci centrare su mobile */
          }
          .why-choose-us-title {
            font-size: 28px !important;
            line-height: 36px !important;
            margin-bottom: 24px !important;
          }
          .ctaButton {
            font-size: 16px !important;
            padding: 12px 24px !important;
          }
        }
      `}</style>

      <div className="why-choose-us-container">
        <h2 className="why-choose-us-title">
          Siamo un’associazione no-profit e apolitica gestita interamente da studenti universitari. 
          Il nostro obiettivo è ridurre il divario tra teoria e pratica nel mondo del lavoro 
          utilizzando il metodo del “learning by doing“.
        </h2>

        {/* Pulsante CTA con classe ctaButton */}
        <a href="#" className="ctaButton">
          Perchè scegliere Noi
        </a>
      </div>
    </section>
  );
}
