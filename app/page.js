"use client";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-image"></div>
          <h1 className="developer-name">Ivan Lo</h1>
          <p className="developer-title">Web Developer</p>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <a href="#home" className="nav-item">
            <div className="nav-icon-bg">
              <svg className="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8851 0.365988C10.6503 0.131646 10.332 0 10 0C9.66803 0 9.34966 0.131646 9.11489 0.365988L0.351429 9.1161C0.123382 9.35186 -0.00280508 9.66762 4.7326e-05 9.99537C0.00289973 10.3231 0.134563 10.6366 0.36668 10.8684C0.598796 11.1002 0.912794 11.2316 1.24104 11.2345C1.56929 11.2373 1.88553 11.1113 2.12165 10.8836L2.48846 10.5174V18.75C2.48846 19.0815 2.62036 19.3995 2.85514 19.6339C3.08992 19.8683 3.40835 20 3.74038 20H6.24423C6.57626 20 6.89469 19.8683 7.12947 19.6339C7.36425 19.3995 7.49615 19.0815 7.49615 18.75V16.2499C7.49615 15.9184 7.62805 15.6005 7.86283 15.3661C8.09761 15.1316 8.41605 14.9999 8.74808 14.9999H11.2519C11.584 14.9999 11.9024 15.1316 12.1372 15.3661C12.3719 15.6005 12.5038 15.9184 12.5038 16.2499V18.75C12.5038 19.0815 12.6357 19.3995 12.8705 19.6339C13.1053 19.8683 13.4237 20 13.7558 20H16.2596C16.5916 20 16.9101 19.8683 17.1449 19.6339C17.3796 19.3995 17.5115 19.0815 17.5115 18.75V10.5174L17.8783 10.8836C18.1145 11.1113 18.4307 11.2373 18.759 11.2345C19.0872 11.2316 19.4012 11.1002 19.6333 10.8684C19.8654 10.6366 19.9971 10.3231 20 9.99537C20.0028 9.66762 19.8766 9.35186 19.6486 9.1161L10.8851 0.365988Z" fill="white"/>
              </svg>
            </div>
            <span className="nav-text">Home</span>
          </a>

          <a href="#about" className="nav-item">
            <div className="nav-icon-bg">
              <svg className="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z" fill="white"/>
              </svg>
            </div>
            <span className="nav-text">About Me</span>
          </a>

          <a href="#resume" className="nav-item">
            <div className="nav-icon-bg">
              <svg className="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6 2C5.73478 2 5.48043 2.10536 5.29289 2.29289C5.10536 2.48043 5 2.73478 5 3V4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V6C18 5.46957 17.7893 4.96086 17.4142 4.58579C17.0391 4.21071 16.5304 4 16 4H15V3C15 2.73478 14.8946 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V4H7V3C7 2.73478 6.89464 2.48043 6.70711 2.29289C6.51957 2.10536 6.26522 2 6 2ZM6 7C5.73478 7 5.48043 7.10536 5.29289 7.29289C5.10536 7.48043 5 7.73478 5 8C5 8.26522 5.10536 8.51957 5.29289 8.70711C5.48043 8.89464 5.73478 9 6 9H14C14.2652 9 14.5196 8.89464 14.7071 8.70711C14.8946 8.51957 15 8.26522 15 8C15 7.73478 14.8946 7.48043 14.7071 7.29289C14.5196 7.10536 14.2652 7 14 7H6Z" fill="white"/>
              </svg>
            </div>
            <span className="nav-text">Resume</span>
          </a>

          <a href="#skills" className="nav-item">
            <div className="nav-icon-bg">
              <svg className="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33333 16.6666L11.6667 3.33331M15 6.66665L18.3333 9.99998L15 13.3333M5 13.3333L1.66666 9.99998L5 6.66665" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="nav-text">Skills</span>
          </a>

          <a href="#projects" className="nav-item">
            <div className="nav-icon-bg">
              <svg className="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6 6V5C6 4.20435 6.31607 3.44129 6.87868 2.87868C7.44129 2.31607 8.20435 2 9 2H11C11.7956 2 12.5587 2.31607 13.1213 2.87868C13.6839 3.44129 14 4.20435 14 5V6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V11.57C15.4396 12.5187 12.7305 13.003 10 13C7.2695 13.003 4.56037 12.5188 2 11.57V8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6H6ZM8 5C8 4.73478 8.10536 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4H11C11.2652 4 11.5196 4.10536 11.7071 4.29289C11.8946 4.48043 12 4.73478 12 5V6H8V5ZM9 10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9H10.01C10.2752 9 10.5296 9.10536 10.7171 9.29289C10.9046 9.48043 11.01 9.73478 11.01 10C11.01 10.2652 10.9046 10.5196 10.7171 10.7071C10.5296 10.8946 10.2752 11 10.01 11H10C9.73478 11 9.48043 10.8946 9.29289 10.7071C9.10536 10.5196 9 10.2652 9 10Z" fill="white"/>
                <path d="M2 13.692V16C2 16.5304 2.21071 17.0392 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0392 18 16.5304 18 16V13.692C15.4224 14.5608 12.7201 15.0026 10 15C7.204 15 4.513 14.54 2 13.692Z" fill="white"/>
              </svg>
            </div>
            <span className="nav-text">Projects</span>
          </a>

          <a href="#contact" className="nav-item">
            <div className="nav-icon-bg">
              <svg className="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882L17.997 5.884C17.9674 5.37444 17.7441 4.89549 17.3728 4.54523C17.0016 4.19497 16.5104 3.99991 16 4H4C3.48958 3.99991 2.99845 4.19497 2.62718 4.54523C2.25591 4.89549 2.0326 5.37444 2.003 5.884Z" fill="white"/>
                <path d="M18 8.11798L10 12.118L2 8.11798V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V8.11798Z" fill="white"/>
              </svg>
            </div>
            <span className="nav-text">Contact Me</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="hero-background"></div>
        <div className="hero-section">
          <h1 className="hero-greeting">Hi, I'm Ivan Lo</h1>
          <h2 className="hero-title">MERN Stack Developer</h2>
          <p className="hero-description">
            Creating Seamless user experiences through 
            innovation MERN stack development. Building
            responsive and dynamic web application and 
            mobile application for the modern digital world.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Hire Me</button>
            <button className="btn-secondary">Let's Talk</button>
          </div>
        </div>
      </main>

      <style jsx>{`
        .sidebar {
          width: 397px;
          height: 100vh;
          background: #0C1B28;
          position: fixed;
          left: 0;
          top: 0;
        }

        .profile-section {
          text-align: center;
          padding-top: 171px;
        }

        .profile-image {
          width: 116px;
          height: 116px;
          border-radius: 50%;
          background: #D9D9D9;
          margin: 0 auto 18px;
        }

        .developer-name {
          font-family: 'Source Serif Pro', serif;
          font-size: 36px;
          font-weight: 600;
          color: #FFF;
          margin: 0 0 9px;
        }

        .developer-title {
          font-family: 'Source Serif Pro', serif;
          font-size: 18px;
          font-weight: 400;
          color: #FFF;
          margin: 0;
        }

        .nav-menu {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 0 73px;
          margin-top: 51px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          height: 75px;
          text-decoration: none;
          position: relative;
        }

        .nav-icon-bg {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #7BE3F7;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 5px;
        }

        .nav-icon {
          width: 20px;
          height: 20px;
        }

        .nav-text {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #FFF;
          margin-left: 19px;
        }

        .main-content {
          margin-left: 397px;
          width: calc(100% - 397px);
          min-height: 100vh;
          background: #000;
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 1025px;
          height: 513px;
          background: url('https://api.builder.io/api/v1/image/assets/TEMP/07b0508a6ee3aa7c188a0af5742d25ea9f6644f8?width=2050') no-repeat;
          background-size: cover;
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        }

        .hero-section {
          position: relative;
          padding: 291px 0 0 128px;
          z-index: 1;
        }

        .hero-greeting {
          font-family: 'Inter', sans-serif;
          font-size: 48px;
          font-weight: 600;
          color: #FFF;
          margin: 0 0 33px;
        }

        .hero-title {
          font-family: 'Inter', sans-serif;
          font-size: 48px;
          font-weight: 600;
          color: #61D3ED;
          margin: 0 0 33px;
        }

        .hero-description {
          font-family: 'Inter', sans-serif;
          font-size: 26px;
          font-weight: 400;
          line-height: 155.9%;
          color: #FFF;
          margin: 0 0 33px;
          max-width: 579px;
        }

        .cta-buttons {
          display: flex;
          gap: 37px;
          margin-top: 164px;
        }

        .btn-primary {
          display: inline-flex;
          padding: 14px 53px;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          border: 1px solid #000;
          background: #61D3ED;
          color: #000;
          font-family: 'Inter', sans-serif;
          font-size: 28px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.3s;
        }

        .btn-primary:hover {
          opacity: 0.9;
        }

        .btn-secondary {
          display: inline-flex;
          padding: 14px 42px;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          border: 3px solid #7BE3F7;
          background: transparent;
          color: #7BE3F7;
          font-family: 'Inter', sans-serif;
          font-size: 28px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .btn-secondary:hover {
          background: rgba(123, 227, 247, 0.1);
        }

        @media (max-width: 1024px) {
          .sidebar {
            width: 280px;
          }

          .main-content {
            margin-left: 280px;
            width: calc(100% - 280px);
          }

          .hero-section {
            padding: 150px 0 0 60px;
          }

          .hero-greeting,
          .hero-title {
            font-size: 36px;
          }

          .hero-description {
            font-size: 20px;
          }

          .btn-primary,
          .btn-secondary {
            font-size: 22px;
            padding: 12px 40px;
          }
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 100%;
            height: auto;
            position: relative;
          }

          .profile-section {
            padding-top: 60px;
          }

          .nav-menu {
            padding: 0 40px 40px;
            margin-top: 40px;
          }

          .main-content {
            margin-left: 0;
            width: 100%;
          }

          .hero-section {
            padding: 80px 40px;
          }

          .hero-greeting,
          .hero-title {
            font-size: 32px;
          }

          .hero-description {
            font-size: 18px;
          }

          .cta-buttons {
            flex-direction: column;
            gap: 20px;
            margin-top: 60px;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
}
