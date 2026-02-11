export default function ContactInfo() {
  return (
    <div className="contact-info-wrapper">
      <div className="contact-info-item">
        <div className="contact-info-label">
          <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white"/>
          </svg>
          <span className="contact-label-text">Email</span>
        </div>
        <div className="contact-info-value">ivanworkspace314@gmail.com</div>
      </div>
      
      <div className="contact-info-item">
        <div className="contact-info-label">
          <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white"/>
          </svg>
          <span className="contact-label-text">Mobile</span>
        </div>
        <div className="contact-info-value">+852 51866234</div>
      </div>

      <style jsx>{`
        .contact-info-wrapper {
          display: flex;
          width: 100%;
          max-width: 660px;
          padding: 25px 15px;
          flex-direction: column;
          gap: 17px;
          border-radius: 4px;
          border: 3px solid var(--accent-cyan-light);
          background: transparent;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }

        .contact-info-label {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .contact-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        .contact-label-text {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
        }

        .contact-info-value {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 400;
          overflow-wrap: anywhere;
          word-break: break-word;
          min-width: 0;
        }

        @media (min-width: 769px) {
          .contact-info-wrapper {
            flex-direction: row;
            padding: 25px 52px;
            gap: 106px;
          }

          .contact-info-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 28px;
            flex-wrap: nowrap;
          }

          .contact-label-text {
            font-size: 18px;
          }

          .contact-info-value {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}
