import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Css/About.css";

const AboutPage = () => {
  const creators = [
    {
      name: "Divesh Sachdeva",
      role: "MERN Stack Developer",
      description:
        "Passionate developer with expertise in building dynamic and scalable web applications using MongoDB, Express.js, React.js, and Node.js.",
      passion:
        "Creating efficient and impactful web applications. Solving complex problems and building scalable, user-friendly solutions that help users in their daily lives.",
      image: "../public/Divesh.png",
      github: "https://github.com/DiveshSachdeva12",
      linkedin: "https://www.linkedin.com/in/divesh-kumar-sachdeva-b618bb250/",
      email: "mailto:diveshkumarsachdeva85@gmail.com",
      portfolio: "https://diveshsachdeva12.github.io/Portfolio-Divesh/",
    },
    {
      name: "Khushi Kankheria",
      role: "MERN Stack Developer",
      description:
        "Dedicated developer passionate about building efficient, high-performing, and scalable web applications with robust full-stack solutions.",
      passion:
        "Integrating AI/ML experience into web applications to enhance functionality, automation, and creating smarter digital solutions.",
      image: "../public/khushi.jpeg",
      github: "https://github.com/Khushikankheria",
      linkedin: "https://www.linkedin.com/in/khushi-kankheria-0b1751256/",
      email: "mailto:khushi@example.com",
      portfolio: "https://khushikankheria-portfolio.netlify.app/",
    },
  ];

  const values = [
    {
      icon: "fas fa-lightbulb",
      title: "Innovation",
      description: "Driving change through cutting-edge tools and creative solutions.",
    },
    {
      icon: "fas fa-users",
      title: "Community",
      description: "Building a supportive network of learners and educators.",
    },
    {
      icon: "fas fa-heart",
      title: "Passion",
      description: "Fueling education with dedication and a love for learning.",
    },
    {
      icon: "fas fa-handshake",
      title: "Integrity",
      description: "Maintaining trust and transparency in everything we do.",
    },
  ];

  const visionPoints = [
    {
      icon: "fas fa-globe",
      title: "Global Accessibility",
      description:
        "Empowering learners worldwide by making education available to everyone, anytime, anywhere.",
    },
    {
      icon: "fas fa-brain",
      title: "Innovative Learning",
      description:
        "Revolutionizing education through creative tools and advanced technology for better engagement.",
    },
    {
      icon: "fas fa-hands-helping",
      title: "Community Collaboration",
      description:
        "Building a supportive network of educators and learners, fostering collaboration and shared growth.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">About EduLearn</h1>
          <p className="hero-subtitle">
            Transforming education through innovation, fostering knowledge, and
            empowering learners everywhere.
          </p>
          <div className="hero-divider"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Mission</h2>
            <p className="subtitle">
              Providing world-class learning experiences to everyone
            </p>
          </div>

          <div className="mission-content">
            <div className="mission-image">
              <img src="../public/mission.jpeg" alt="Our Mission" />
              <div className="image-overlay"></div>
            </div>

            <div className="mission-text">
              <p className="mission-description">
                Our mission is to provide a world-class learning experience
                accessible to everyone, everywhere. We are committed to
                fostering innovation and empowering students, educators, and
                communities to achieve their full potential.
              </p>

              <div className="mission-points">
                <div className="mission-point">
                  <div className="point-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="point-text">
                    <h4>Accessible Education</h4>
                    <p>Empowering learners through quality content anytime, anywhere.</p>
                  </div>
                </div>

                <div className="mission-point">
                  <div className="point-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="point-text">
                    <h4>Innovation & Growth</h4>
                    <p>Fostering growth with innovative tools and resources.</p>
                  </div>
                </div>

                <div className="mission-point">
                  <div className="point-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="point-text">
                    <h4>Community Building</h4>
                    <p>Building passionate communities of educators and students.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <div className="section-header section-header-light">
            <h2>Our Vision</h2>
            <p className="subtitle">
              Building the future of education through three core pillars
            </p>
          </div>

          <div className="vision-grid">
            {visionPoints.map((point, index) => (
              <div key={index} className="vision-card">
                <div className="vision-icon">
                  <i className={point.icon}></i>
                </div>
                <h3 className="vision-title">{point.title}</h3>
                <p className="vision-text">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Core Values</h2>
            <p className="subtitle">
              Principles that guide everything we do
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creators Section */}
      <section className="creators-section">
        <div className="container">
          <div className="section-header section-header-light">
            <h2>Meet The Creators</h2>
            <p className="subtitle">
              Passionate developers building the future of education
            </p>
          </div>

          {/* Creator Carousel */}
          <div id="creatorSlider" className="carousel slide creator-carousel" data-bs-ride="carousel">
            <div className="carousel-inner">
              {creators.map((creator, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="creator-slide">
                    <div className="creator-image-col">
                      <div className="creator-image">
                        <img src={creator.image} alt={creator.name} />
                      </div>
                      <div className="creator-passion">
                        <h3>Passion for Development</h3>
                        <p>{creator.passion}</p>
                      </div>
                    </div>

                    <div className="creator-details-col">
                      <div className="creator-details">
                        <h3 className="creator-name">{creator.name}</h3>
                        <p className="creator-role">{creator.role}</p>
                        <p className="creator-description">{creator.description}</p>

                        {/* Social Media Links */}
                        <div className="creator-social">
                          <a
                            href={creator.github}
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub"
                          >
                            <i className="fab fa-github"></i> GitHub
                          </a>
                          <a
                            href={creator.linkedin}
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn"
                          >
                            <i className="fab fa-linkedin"></i> LinkedIn
                          </a>
                          <a
                            href={creator.email}
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Email"
                          >
                            <i className="fas fa-envelope"></i> Email
                          </a>
                          <a
                            href={creator.portfolio}
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Portfolio"
                          >
                            <i className="fas fa-globe"></i> Portfolio
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#creatorSlider"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#creatorSlider"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
