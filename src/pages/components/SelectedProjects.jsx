import React from 'react';

export default function SelectedProjects() {
  return (
    <section className="selected-projects">
      {/* Badge "SELECTED PROJECTS" */}
      <div className="labelContainer">
        <span className="sectionLabel">SELECTED PROJECTS</span>
      </div>

      {/* Titolo sezione */}
      <h2 className="sectionTitle">Apps we built been trending on the App Store</h2>

      {/* Riga superiore: 2 card affiancate */}
      <div className="row topRow">
        {/* Card 1: sfondo lilla con mani.png */}
        <div className="card cardLilac">
          <div className="cardNumber">01.</div>
          <div className="cardShowcase">Showcase</div>
          <h3 className="cardMainTitle">scuola</h3>
          <p className="cardDescription">
            Convenience, savings and rewards at your fingertips
          </p>
          <p className="cardLabel">Lounge Project</p>
          <div className="arrow">↗</div>
        </div>

        {/* Card 2: sfondo beige con grafico.png */}
        <div className="card cardBeige">
          <div className="cardNumber">02.</div>
          <div className="cardShowcase">Showcase</div>
          <h3 className="cardMainTitle">JOLIE.</h3>
          <p className="cardDescription">
            Private trust management and trading platform
          </p>
          <p className="cardLabel">Lounge Project</p>
          <div className="arrow">↗</div>
        </div>
      </div>

      {/* Riga inferiore: 1 card nera con tel.png */}
      <div className="row bottomRow">
        {/* Card 3: sfondo nero con tel.png */}
        <div className="card cardBlack">
          <div className="cardNumber">03.</div>
          <div className="cardShowcase">Showcase</div>
          <h3 className="cardMainTitle">Skole</h3>
          <p className="cardDescription">
            Online platform for distance learning
          </p>
          <p className="cardLabel">Lounge Project</p>
          <div className="arrow">↗</div>
        </div>
      </div>

      {/* Link finale */}
      <div className="viewAll">
        <a href="#" className="caseStudiesLink">View all Case Studies</a>
      </div>

      <style jsx>{`
        /* Sezione generale */
        .selected-projects {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        /* Badge "SELECTED PROJECTS" */
        .labelContainer {
          display: flex;
          justify-content: center;
          margin-bottom: 8px; /* Spazio sotto il badge */
        }
        .sectionLabel {
          display: inline-block;
          background-color: #f5f5f5; /* sfondo chiaro */
          border-radius: 8px;
          padding: 4px 8px;
          font-size: 14px;
          font-weight: 500;
          color: #666666;
          text-transform: uppercase;
        }

        /* Titolo con stile richiesto */
        .sectionTitle {
          font-family: "Inter Tight", sans-serif;
          font-size: 48px;
          line-height: 58px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 40px;
        }

        /* Contenitore righe */
        .row {
          display: flex;
          width: 100%;
          /* Altezza fissa per mantenere la stessa dimensione tra la riga superiore e inferiore */
          height: 400px; /* Regola a piacere */
          margin-bottom: 20px;
        }
        .topRow {
          margin-bottom: 40px;
        }

        /* Card generiche */
        .card {
          position: relative;
          flex: 1;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          overflow: hidden;

          /* Immagine di sfondo */
          background-position: center;
          background-repeat: no-repeat;
          background-size: 40%;
        }

        .cardNumber {
          font-size: 14px;
          font-weight: 700;
          color: #666666;
          margin-bottom: 8px;
        }
        .cardShowcase {
          position: absolute;
          top: 24px;
          right: 24px;
          font-size: 14px;
          font-weight: 600;
          color: #666666;
        }
        .cardMainTitle {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .cardDescription {
          font-size: 16px;
          font-weight: 400;
          margin-bottom: auto; /* Spinge la label in basso */
          max-width: 80%;
        }
        .cardLabel {
          font-size: 14px;
          font-weight: 500;
          margin-top: 20px;
        }
        .arrow {
          position: absolute;
          bottom: 24px;
          right: 24px;
          font-size: 20px;
          font-weight: 700;
        }

        /* Card specifiche con immagini di sfondo */
        .cardLilac {
          background-color: #edeaff;
          background-image: url("/mani.png"); /* Percorso immagine */
          margin-right: 20px; /* Spazio orizzontale tra la card lillà e la card beige */
        }
        .cardBeige {
          background-color: #fdf5f0;
          background-image: url("/grafico.png");
        }
        .cardBlack {
          background-color: #0f0f0f;
          background-image: url("/tel.png");
          color: #ffffff;
        }
        .cardBlack .cardNumber,
        .cardBlack .cardShowcase {
          color: #cccccc;
        }
        .cardBlack .arrow {
          color: #ffffff;
        }

        /* Link finale */
        .viewAll {
          text-align: center;
          margin-top: 40px;
        }
        .caseStudiesLink {
          font-family: "Inter Tight", sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #0f0f0f; /* colore base */
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .caseStudiesLink:hover {
          text-decoration: underline;
          color: #1e40af; /* blu in hover */
        }

        /* Responsività */
        @media (max-width: 768px) {
          .row {
            flex-direction: column;
            height: auto; /* Permette alle card di crescere in altezza su mobile */
          }
          .cardLilac {
            margin-right: 0;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
}
