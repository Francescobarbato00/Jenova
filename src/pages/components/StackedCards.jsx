import React from 'react';

export default function StackedCardsSection() {
  return (
    <section className="stackedCardsSection">
      {/* Titolo e pulsanti in alto (non sticky) */}
      <div className="headerContent">
        <h2 className="sectionTitle">Industries we've excelled in</h2>
        <div className="buttonsRow">
          <button className="filterButton">Telemedicine</button>
          <button className="filterButton">Dating Apps</button>
          <button className="filterButton">Fintech</button>
        </div>
      </div>

      {/* Contenitore delle 3 card impilate */}
      <div className="cardsStack">
        {/* Card 1 */}
        <div className="card card1">
          <h3>Telemedicine</h3>
          <p>
            Healthcare is broken. Fix it by building a better virtual solution
            with a telehealth app or a web platform.
          </p>
        </div>

        {/* Card 2 */}
        <div className="card card2">
          <h3>Dating Apps</h3>
          <p>
            It’s hard to find your second half, but building a dating app
            shouldn’t be.
          </p>
        </div>

        {/* Card 3 */}
        <div className="card card3">
          <h3>Fintech</h3>
          <p>
            Fintech projects are strict. We bring our innovative approach to it.
          </p>
        </div>
      </div>

      <style jsx>{`
        /* Sezione generale a sfondo bianco */
        .stackedCardsSection {
          background: #ffffff;
          padding: 60px 20px; /* Spazio intorno al contenuto */
        }

        /* Contenuto iniziale (titolo + pulsanti) */
        .headerContent {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          margin-bottom: 80px; /* spazio prima delle card */
        }

        /* Titolo con stile richiesto */
        .sectionTitle {
          font-family: "Inter Tight", sans-serif;
          font-size: 48px;
          line-height: 58px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        /* Pulsanti (filtri) */
        .buttonsRow {
          display: inline-flex;
          gap: 12px;
        }
        .filterButton {
          background-color: #f5f5f5;
          border: none;
          padding: 10px 20px;
          border-radius: 999px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
        }

        /* Contenitore delle card "stacked" */
        /* Altezza sufficiente a mostrare le 3 card che si sovrappongono
           + un po' di spazio extra in fondo (ad es. 800px) */
        .cardsStack {
          position: relative;
          height: calc(3 * 620px + 800px); 
          /* 3 card da 620px di altezza ciascuna + 800px di margine finale */
          /* Regola a piacere se vuoi più/meno spazio sotto l'ultima card */
        }

        /* Card generiche: dimensione fissa 1280x620, sticky in alto */
        .card {
          position: sticky;
          top: 0; /* la card resta ancorata all'inizio dello schermo */
          width: 1280px;
          height: 620px;
          margin: 0 auto; /* centrata orizzontalmente */
          background: #f0f0f0;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 40px;
          box-sizing: border-box;
          z-index: 1; /* base z-index */
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .card h3 {
          margin: 0 0 16px 0;
          font-size: 32px;
          font-weight: 700;
        }
        .card p {
          margin: 0;
          font-size: 16px;
          line-height: 1.4;
        }

        /* Card specifiche: z-index crescente
           -> la 2 copre la 1, la 3 copre la 2 */
        .card1 {
          background: #fefaff;
          z-index: 1;
        }
        .card2 {
          background: #f9f7ff;
          z-index: 2;
        }
        .card3 {
          background: #f3f5ff;
          z-index: 3;
        }

        /* Responsivo: riduci dimensioni su schermi più stretti */
        @media (max-width: 1400px) {
          .card {
            width: 90%;
            height: auto; /* se non vuoi forzare 620px su schermi piccoli */
          }
          .cardsStack {
            height: auto; /* potresti passare a un layout diverso su mobile */
          }
        }
      `}</style>
    </section>
  );
}
