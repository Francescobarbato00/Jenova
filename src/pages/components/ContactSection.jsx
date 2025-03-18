import React, { useEffect, useState } from 'react';

export default function ContactSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200); // Effetto di ingresso dopo 200ms
  }, []);

  return (
    <section className={`contact-section ${visible ? "visible" : ""}`}>
      <div className="contact-content">
        <span className="contact-badge">CONTACT</span>
        <h2 className="contact-title">We're here to help</h2>
        <div className="contact-info">
          <p><strong>Call us at:</strong><br />1-800-356-8933</p>
          <p><strong>Email us:</strong><br /><a href="mailto:support@tecnologia.com">support@tecnologia.com</a></p>
        </div>
        <button className="contact-button">Schedule a free consultation</button>
      </div>

      {/* Immagine spostata più in basso */}
      <div className="contact-image">
        <div className="image-overlay"></div>
        <img src="/contact.jpg" alt="Reception Desk" />
      </div>

      <style jsx>{`
        .contact-section {
          text-align: center;
          padding: 60px 20px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .contact-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .contact-badge {
          display: inline-block;
          background: #E5E7EB;
          color: #000;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .contact-title {
          font-size: 36px;
          font-weight: 700;
          color: #0A0D31;
          margin: 10px 0;
        }

        .contact-info {
          display: flex;
          justify-content: center;
          gap: 40px;
          font-size: 16px;
          color: #333;
          margin-bottom: 20px;
        }

        .contact-info p {
          margin: 0;
          text-align: left;
        }

        .contact-info a {
          color: #1E40AF;
          text-decoration: none;
        }

        .contact-button {
          background: #000;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          padding: 12px 20px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .contact-button:hover {
          background: #333;
        }

        .contact-image {
          position: relative;
          width: 100%;
          max-height: 450px; /* Mantiene un'altezza controllata */
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 50px; /* Aumentato il margine per spostare più in basso */
        }

        .contact-image img {
          width: 100%;
          height: auto;
          object-fit: cover;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .contact-section.visible .contact-image img {
          opacity: 1;
          transform: translateY(0);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.2); /* Overlay leggero */
        }
      `}</style>
    </section>
  );
}
