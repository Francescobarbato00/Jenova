import React from 'react';

export default function ConsultationSection() {
  return (
    <section className="consultation-section">
      <div className="consultation-content">
        {/* Sinistra - Informazioni */}
        <div className="consultation-text">
          <span className="consultation-badge">CONTACT US</span>
          <h2 className="consultation-title">
            Partner with Us for <br /> Comprehensive IT Solutions
          </h2>
          <p className="consultation-description">
            We're happy to answer any questions and help you determine which of our services best fit your needs.
          </p>
          <p className="consultation-call"><strong>Call us at:</strong> 1-800-356-8933</p>

          {/* Lista Benefici */}
          <div className="consultation-benefits">
            <div>
              ✅ Client-oriented<br />
              ✅ Independent<br />
              ✅ Competent
            </div>
            <div>
              ✅ Results-driven<br />
              ✅ Problem-solving<br />
              ✅ Transparent
            </div>
          </div>

          {/* Cosa succede dopo */}
          <div className="consultation-steps">
            <h4>What happens next?</h4>
            <div className="step"><strong>1</strong> We schedule a call at your convenience</div>
            <div className="step"><strong>2</strong> We do a discovery and consulting meeting</div>
            <div className="step"><strong>3</strong> We prepare a proposal</div>
          </div>
        </div>

        {/* Destra - Form */}
        <div className="consultation-form">
          <h3>Schedule a Free Consultation</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <input type="text" placeholder="Company / Organization" />
            <input type="email" placeholder="Company email" />
            <input type="tel" placeholder="Phone" />
            <select>
              <option>Select Option</option>
              <option>IT Consulting</option>
              <option>Cloud Services</option>
              <option>Cybersecurity</option>
            </select>
            <textarea placeholder="To better assist you, please describe how we can help..."></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .consultation-section {
          background: linear-gradient(to bottom, #F8FAFC, #E8F0FF);
          padding: 80px 20px;
          display: flex;
          justify-content: center;
        }

        .consultation-content {
          display: flex;
          max-width: 1100px;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .consultation-text {
          padding: 50px;
          flex: 1;
          background: white;
          color: #0A0D31;
        }

        .consultation-badge {
          background: #E0E7FF;
          color: #1E3A8A;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 5px;
          display: inline-block;
          text-transform: uppercase;
        }

        .consultation-title {
          font-size: 32px;
          font-weight: 700;
          margin: 15px 0;
        }

        .consultation-description {
          font-size: 16px;
          margin-bottom: 20px;
          color: #4B5563;
        }

        .consultation-call {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 25px;
          color: #1E3A8A;
        }

        .consultation-benefits {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          margin-bottom: 30px;
        }

        .consultation-steps h4 {
          font-size: 18px;
          margin-bottom: 15px;
        }

        .step {
          font-size: 14px;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
        }

        .step strong {
          background: #3B82F6;
          color: white;
          padding: 6px 12px;
          border-radius: 50%;
          margin-right: 10px;
        }

        .consultation-form {
          padding: 50px;
          flex: 1;
          background: white;
          border-left: 4px solid #3B82F6;
          border-radius: 0 16px 16px 0;
        }

        .consultation-form h3 {
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #0A0D31;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-group {
          display: flex;
          gap: 12px;
        }

        input, select, textarea {
          width: 100%;
          padding: 14px;
          border: 1px solid #D1D5DB;
          border-radius: 8px;
          font-size: 14px;
          color: #333;
          background: #F9FAFB;
        }

        textarea {
          min-height: 100px;
        }

        button {
          background: #1E3A8A;
          color: white;
          font-size: 16px;
          padding: 14px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s ease;
          font-weight: 600;
        }

        button:hover {
          background: #153177;
        }

        @media (max-width: 900px) {
          .consultation-content {
            flex-direction: column;
          }

          .consultation-text,
          .consultation-form {
            width: 100%;
            border-radius: 16px;
            border-left: none;
          }
        }
      `}</style>
    </section>
  );
}
