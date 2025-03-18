import React from 'react';

export default function AwardWinningServices() {
  return (
    <section
      style={{
        backgroundColor: '#fff',
        padding: '80px 20px',
      }}
    >
      <style>{`
        .servicesContainer {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }
        
        .serviceCard {
          flex: 1;
          min-width: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .serviceIcon {
          width: 60px;
          height: 60px;
          margin-bottom: 16px;
        }

        .serviceTitle {
          font-family: "Inter Tight", sans-serif;
          font-weight: 600;
          font-size: 20px;
          line-height: 26px;
          color: #000;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .serviceTitle:hover {
          color: rgb(1, 14, 208);
        }

        .serviceText {
          font-family: Helvetica, sans-serif;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.6);
          font-size: 16px;
          line-height: 22px;
          margin: 0;
          max-width: 300px;
        }

        .servicesLinkContainer {
          text-align: left;
          margin-top: 40px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .servicesLink {
          color: rgba(0, 0, 0, 0.6);
          text-decoration: none;
          transition: color 0.3s ease, text-decoration 0.3s ease;
          font-size: 18px;
          font-weight: 500;
        }

        .servicesLink:hover {
          color: #1E40AF;
          text-decoration: underline;
        }
      `}</style>

      {/* Titolo principale */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'left',
          marginBottom: '40px',
        }}
      >
        <h2
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontWeight: 700,
            color: 'rgb(10, 13, 49)',
            fontSize: '48px',
            lineHeight: '58px',
            margin: 0,
          }}
        >
          Forniamo ai clienti<br />
          Servizi vincenti
        </h2>
      </div>

      {/* Blocco delle card */}
      <div className="servicesContainer">
        {/* Card 1 */}
        <div className="serviceCard">
          <img
            src="/Innovative.svg"
            alt="Siti Web"
            className="serviceIcon"
          />
          <h3 className="serviceTitle">Siti Web</h3>
          <p className="serviceText">
            Con la nostra creatività, trasformeremo la presenza online del tuo brand
            in una vetrina di successo per il tuo business.
          </p>
        </div>

        {/* Card 2 */}
        <div className="serviceCard">
          <img
            src="/Cost-effectiveness.svg"
            alt="Analisi Economiche"
            className="serviceIcon"
          />
          <h3 className="serviceTitle">Analisi Economiche</h3>
          <p className="serviceText">
            Analisi di mercato che offre insight strategici. Con la nostra competenza,
            ottimizzeremo le tue strategie aziendali per il successo.
          </p>
        </div>

        {/* Card 3 */}
        <div className="serviceCard">
          <img
            src="/Industry.svg"
            alt="Comunicazione"
            className="serviceIcon"
          />
          <h3 className="serviceTitle">Comunicazione</h3>
          <p className="serviceText">
            Gestione di social media, con pagine personalizzate, piani editoriali ad hoc,
            campagne social. Scegli noi per massimizzare la tua visibilità online.
          </p>
        </div>
      </div>

      {/* Link "Scopri tutti i servizi" */}
      <div className="servicesLinkContainer">
        <a href="#" className="servicesLink">
          Scopri tutti i servizi
        </a>
      </div>
    </section>
  );
}
