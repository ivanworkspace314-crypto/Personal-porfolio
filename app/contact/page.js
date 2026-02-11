'use client'
import HeroHeading from "@/components/hero/HeroHeading";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import HeroBackground from "@/components/hero/HeroBackground";

export default function ContactPage() {
  return (
    <div >


      <div className="contact-content">
        <div className="contact-heading-wrapper">
          <HeroHeading title="Contact Me" />
        </div>
        
        <div className="contact-info-section">
          <ContactInfo />
        </div>
        
        <div className="contact-form-section">
          <h2 className="section-heading">Contact Form</h2>
          <ContactForm />
        </div>
      </div>

      <style jsx>{`
        .contact-page {
          position: relative;
          min-height: 100vh;
          background: var(--background);
        }

       

        .contact-content {
          position: relative;
          z-index: 1;
          padding: 68px 18px 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 26px;
        }

        .contact-heading-wrapper {
          width: 100%;
          max-width: 660px;
        }

        .contact-info-section {
          width: 100%;
          max-width: 660px;
          display: flex;
          justify-content: center;
        }

        .contact-form-section {
          width: 100%;
          max-width: 660px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 26px;
        }

        .section-heading {
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 28px;
          font-weight: 600;
          text-align: center;
          margin: 0;
        }

        @media (min-width: 769px) {
          .background-image {
            width: 1025px;
            height: 513px;
            left: 128px;
            top: -6px;
            background-image: url('https://api.builder.io/api/v1/image/assets/TEMP/d0e551709cc15507e08e1d6cfc72e9d7ba28708b?width=2050');
          }

          .contact-content {
            padding: 125px 194px 80px;
            gap: 47px;
          }

          .contact-heading-wrapper {
            text-align: left;
          }

          .section-heading {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}
