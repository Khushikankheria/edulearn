import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Css/HomePage.css";

const HomePage = () => {
  const [currentText, setCurrentText] = useState("");
  const fullText = "Welcome to EduLearn";

  useEffect(() => {
    let charIndex = 0;
    let typingSpeed = 150;
    let deletingSpeed = 75;
    let isDeleting = false;
    let timeoutId;

    const typeEffect = () => {
      if (!isDeleting) {
        setCurrentText(fullText.slice(0, charIndex + 1));
        charIndex++;

        if (charIndex === fullText.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeEffect, 2000);
        } else {
          timeoutId = setTimeout(typeEffect, typingSpeed);
        }
      } else {
        setCurrentText(fullText.slice(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          timeoutId = setTimeout(typeEffect, 500);
        } else {
          timeoutId = setTimeout(typeEffect, deletingSpeed);
        }
      }
    };

    typeEffect();

    return () => clearTimeout(timeoutId);
  }, []);

  const features = [
    {
      icon: "fas fa-download",
      title: "Easy to Download",
      description: "Download notes and resources with a single click.",
    },
    {
      icon: "fas fa-book",
      title: "Easy to Read",
      description: "Clean, readable content with proper formatting.",
    },
    {
      icon: "fas fa-globe",
      title: "Easy to Access",
      description: "Access materials anytime, anywhere, on any device.",
    },
    {
      icon: "fas fa-pencil-alt",
      title: "Interactive Learning",
      description: "Engage with quizzes and discussion forums.",
    },
    {
      icon: "fas fa-user-tie",
      title: "Expert Guidance",
      description: "Get mentored by experienced educators.",
    },
    {
      icon: "fas fa-clock",
      title: "Flexible Learning",
      description: "Learn at your own pace and schedule.",
    },
  ];

  const faqs = [
    {
      question: "What is this platform about?",
      answer:
        "This platform is designed to help students with learning resources, study material, previous year question papers, and guidance to excel in their exams.",
    },
    {
      question: "How do I join the WhatsApp group?",
      answer:
        "Click on the 'Join WhatsApp Group' button to connect with other students and get study tips.",
    },
    {
      question: "Can I access from mobile devices?",
      answer:
        "Yes, our platform is fully mobile-friendly. Access materials from any device.",
    },
    {
      question: "How do I use previous year papers?",
      answer:
        "Download papers from our platform to practice and familiarize with exam formats.",
    },
    {
      question: "What's the note format?",
      answer:
        "We provide comprehensive notes in PDF format covering important topics and explanations.",
    },
    {
      question: "How often is content updated?",
      answer:
        "We regularly update content with latest syllabus changes and study materials.",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="typewriter">{currentText}</span>
              <span className="cursor">|</span>
            </h1>
            <p className="hero-description">
              Master your subjects with comprehensive learning resources, expert guidance, 
              and interactive tools designed for your success.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary-custom">Start Learning</button>
              <button 
                className="btn-secondary-custom"
                onClick={() => window.open("https://wa.me/yourgroupID", "_blank")}
              >
                <i className="fab fa-whatsapp"></i> Join Community
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/public/Exams-bro.png" alt="Education" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose EduLearn</h2>
            <div className="header-underline"></div>
            <p className="section-subtitle">Everything you need to succeed in your studies</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <div className="header-underline"></div>
            <p className="section-subtitle">Find answers to common questions</p>
          </div>

          <div className="faq-container">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${index > 0 ? "collapsed" : ""}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq${index}`}
                    >
                      <span className="faq-number">{index + 1}</span>
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`faq${index}`}
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Learning?</h2>
            <p>Join thousands of students already achieving their goals with EduLearn</p>
            <button className="btn-cta">Get Started Today</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1 */}
            <div className="footer-column">
              <h5>About EduLearn</h5>
              <p>
                Committed to providing high-quality learning resources and expert guidance
                to help students achieve their academic goals successfully.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div className="footer-column">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a href="#home">
                    <i className="fas fa-chevron-right"></i> Home
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <i className="fas fa-chevron-right"></i> About
                  </a>
                </li>
                <li>
                  <a href="#blog">
                    <i className="fas fa-chevron-right"></i> Blog
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <i className="fas fa-chevron-right"></i> Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="footer-column">
              <h5>Contact Info</h5>
              <ul className="contact-info">
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:info@edulearn.com">info@edulearn.com</a>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <a href="tel:+918700115912">+91 8700115912</a>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>India</span>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="footer-column">
              <h5>Newsletter</h5>
              <p>Get updates on new resources and study tips.</p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  aria-label="Email"
                />
                <button type="submit">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <p className="copyright">
              &copy; 2025 EduLearn. All Rights Reserved. | Designed by{" "}
              <span className="brand">EduLearn Team</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
