import React from 'react';

export default function OfficeLocations() {
  return (
    <section className="locations-section">
      <div className="container">
        {/* Titolo e descrizione */}
        <div className="header">
          <h2>Our locations</h2>
          <p>
            We have offices throughout Italy— we’d love to show you around sometime.  
            Don’t see an office in your area? We have the power to support your business,  
            no matter the location.
          </p>
        </div>

        {/* Blocchi delle sedi */}
        <div className="locations">
          {/* Sede di Milano */}
          <div className="location">
            <h3>Milano</h3>
            <p><strong>Centro Direzionale</strong></p>
            <p>Via della Moscova, 18</p>
            <p>20121 Milano, MI</p>
            <p>(02) 1234-5678</p>
            <a href="#">Get direction</a>
          </div>

          {/* Separatore */}
          <div className="divider"></div>

          {/* Sede di Roma */}
          <div className="location">
            <h3>Roma</h3>
            <p><strong>Zona EUR</strong></p>
            <p>Viale Europa, 175</p>
            <p>00144 Roma, RM</p>
            <p>(06) 9876-5432</p>
            <a href="#">Get direction</a>
          </div>

          {/* Separatore */}
          <div className="divider"></div>

          {/* Sede di Napoli */}
          <div className="location">
            <h3>Napoli</h3>
            <p><strong>Centro Storico</strong></p>
            <p>Via Toledo, 156</p>
            <p>80134 Napoli, NA</p>
            <p>(081) 5678-1234</p>
            <a href="#">Get direction</a>
          </div>
        </div>
      </div>

      {/* Pattern decorativo a destra */}
      <div className="pattern">
        <img src="/diamond-pattern.svg" alt="Decorative pattern" />
      </div>

      <style jsx>{`
        .locations-section {
          position: relative;
          background: #fff;
          padding: 80px 20px;
          display: flex;
          justify-content: center;
        }

        .container {
          max-width: 1200px;
          text-align: left;
        }

        .header {
          max-width: 600px;
          margin-bottom: 40px;
        }

        h2 {
          font-size: 32px;
          font-weight: 700;
          color: #0A0D31;
        }

        p {
          font-size: 16px;
          color: #4B5563;
          margin-bottom: 10px;
        }

        .locations {
          display: flex;
          justify-content: space-between;
          gap: 40px;
        }

        .location {
          flex: 1;
          text-align: left;
        }

        .location h3 {
          font-size: 22px;
          font-weight: bold;
          color: #0A0D31;
        }

        .location a {
          color: #1E3A8A;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
        }

        .location a:hover {
          text-decoration: underline;
        }

        .divider {
          width: 1px;
          background: #E5E7EB;
          height: auto;
        }

        .pattern {
          position: absolute;
          top: 0;
          right: 0;
          width: 250px;
          height: auto;
        }

        .pattern img {
          width: 100%;
          opacity: 0.2;
        }

        @media (max-width: 900px) {
          .locations {
            flex-direction: column;
            gap: 20px;
          }

          .divider {
            display: none;
          }

          .pattern {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
