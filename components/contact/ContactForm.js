'use client';

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Form submitted');
  };

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <input
            type="text"
            placeholder="Name"
            className="form-input"
            required
          />
        </div>
        
        <div className="form-field">
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            required
          />
        </div>
        
        <div className="form-field">
          <textarea
            placeholder="Message"
            className="form-textarea"
            rows="5"
            required
          />
        </div>
        
        <button type="submit" className="form-submit-btn">
          <span>Send Message</span>
          <svg className="submit-arrow" width="17" height="35" viewBox="0 0 17 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <image href="https://api.builder.io/api/v1/image/assets/TEMP/2c2ba051877ab3fce0832e6a2436468108851d3e?width=34" width="17" height="35" style={{ mixBlendMode: 'screen' }} />
          </svg>
        </button>
      </form>

      <style jsx>{`
        .contact-form-wrapper {
          display: flex;
          width: 100%;
          max-width: 660px;
          padding: 14px 19px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 4px;
          border: 3px solid var(--accent-cyan-light);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 19px;
          width: 100%;
        }

        .form-field {
          display: flex;
          width: 100%;
        }

        .form-input,
        .form-textarea {
          display: flex;
          padding: 17px 20px;
          width: 100%;
          border-radius: 7px;
          border: 1.4px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.6);
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 21px;
          font-weight: 400;
          letter-spacing: -0.21px;
          outline: none;
          min-width: 0;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--accent-cyan-light);
        }

        .form-textarea {
          min-height: 152px;
          resize: vertical;
        }

        .form-submit-btn {
          display: flex;
          padding: 17px 14px;
          justify-content: center;
          align-items: center;
          gap: 14px;
          width: 100%;
          border-radius: 7px;
          background: linear-gradient(90deg, #763AF5 0%, #A604F2 117.18%);
          border: none;
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 21px;
          font-weight: 500;
          letter-spacing: -0.21px;
          cursor: pointer;
          transition: opacity 0.2s;
          text-align: center;
          white-space: normal;
        }

        .form-submit-btn:hover {
          opacity: 0.9;
        }

        .submit-arrow {
          width: 17px;
          height: 35px;
          transform: rotate(90deg);
        }

        @media (min-width: 769px) {
          .contact-form-wrapper {
            padding: 56px;
          }

          .form-field {
            gap: 20px;
          }
        }

        @media (max-width: 480px) {
          .form-input,
          .form-textarea,
          .form-submit-btn {
            font-size: 18px;
          }

          .form-input,
          .form-textarea {
            padding: 14px 16px;
          }

          .form-submit-btn {
            padding: 14px 12px;
          }
        }
      `}</style>
    </div>
  );
}
