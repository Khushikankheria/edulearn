import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Css/HomePage.css";

import AOS from "aos"; // Import AOS

const HomePage = () => {
  const [currentText, setCurrentText] = useState("");
  const fullText = "Welcome to the Education Learning";

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease', // Easing function
      once: true, // Trigger animation only once
    });

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
          timeoutId = setTimeout(typeEffect, 1000);  
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

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" data-aos="fade-up">
        <img src="/public/Exams-bro.png" alt="Education" id="img-education" />
        <div className="text-container">
          <h1 className="display-3 mb-3 text-white">
            <span className="typewriter">{currentText}</span>
          </h1>
          <p className="lead mb-4 text-white">
            <b>Learn, grow, and achieve your educational goals with us.</b>
          </p>
        </div>
      </section>

      {/* WhatsApp Button */}
      <button
        type="button"
        className="btn btn-primary"
        id="Whatsapp-btn"
        onClick={() => window.open("https://wa.me/yourgroupID", "_blank ")}
        data-aos="fade-up"  
      >
        <i className="fas fa-user"></i> Join WhatsApp Group
      </button>

      {/* Features Section */}
      <section className="features text-center py-5 bg-light"  data-aos="fade-up">
        <div className="container"  data-aos="fade-up" id="container2">
          <h2 className="display-4 mb-4 text-dark" style={{ color: "#4e73df" }}  data-aos="fade-up"> 
            Why Choose Us
          </h2>
          <div className="row"  data-aos="fade-up">
            {[ // Features Array (same as before)
              {icon: "fas fa-download", color: "text-primary", title: "Easy to Download", desc: "Download notes, resources, and tutorials with a single click for offline access."},
              {icon: "fas fa-book-reader", color: "text-success", title: "Easy for Reading", desc: "Our platform provides clean, readable content with adjustable font sizes and dark/light modes."},
              {icon: "fas fa-laptop", color: "text-warning", title: "Easy to Access", desc: "Access your materials anytime, anywhere, from any device, with cloud-based storage."},
              {icon: "fas fa-chalkboard-teacher", color: "text-info", title: "Interactive Learning", desc: "Engage with interactive quizzes and discussion forums to enhance your learning experience."},
              {icon: "fas fa-user-graduate", color: "text-danger", title: "Expert Guidance", desc: "Get access to expert mentors and personalized guidance for your learning journey."},
              {icon: "fas fa-clock", color: "text-secondary", title: "Flexible Learning", desc: "Learn at your own pace, with on-demand resources that fit your schedule."},
            ].map((feature, index) => (
              <div className="col-md-4 mb-3" key={index} data-aos="fade-up">
                <div className="feature-box" data-aos="fade-up">
                  <i className={`${feature.icon} fa-2x mb-3 ${feature.color} data-aos="fade-up"`}></i>
                  <h3 data-aos="fade-up">{feature.title}</h3>

                  <p data-aos="fade-up">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    
     {/* Frequently Asked Questions */}
     <section className="faq-section py-5 position-relative"data-aos="fade-up">
  <div className="background-animation"data-aos="fade-up"></div>

  <div className="container position-relative z-1"data-aos="fade-up">
    <h2 className="display-4 mb-4 text-center text-black"data-aos="fade-up">
      FAQs
    </h2>
    <div className="accordion" id="faqAccordion">
      {[ 
        {
          question: "What is this platform about?",
          answer: "This platform is designed to help students with learning resources, study material, previous year question papers, and guidance to excel in their final college exams."
        },
        {
          question: "How do I join the WhatsApp group?",
          answer: "Click on the 'Join WhatsApp Group' button on the homepage to connect with other students, get study tips, and clarify your doubts."
        },
        {
          question: "Can I access the platform from mobile devices?",
          answer: "Yes, our platform is mobile-friendly, and you can access study materials, notes, and previous year question papers from any device."
        },
        {
          question: "How can I use previous year question papers to prepare for my exams?",
          answer: "You can download the previous year question papers from our platform to practice and familiarize yourself with the exam format and commonly asked questions."
        },
        {
          question: "How do you provide notes?",
          answer: "We provide comprehensive notes in PDF format that cover important topics, explanations, and tips to help you understand the subject matter effectively."
        },
        {
          question: "How often is the content updated?",
          answer: "We regularly update our content with the latest syllabus changes, study materials, and exam patterns to ensure you are always well-prepared."
        },
        {
          question: "Can I ask for help with specific subjects?",
          answer: "Yes, you can post your questions in our discussion forum or join our WhatsApp group to get help with specific subjects and exam-related queries."
        },
        {
          question: "Do you provide exam preparation strategies?",
          answer: "Yes, we share effective study strategies, tips on time management, and exam-solving techniques to help you prepare for your final exams efficiently."
        },
      ].map((faq, index) => (
        <div className="accordion-item" key={index}data-aos="fade-up">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${index > 0 ? "collapsed" : ""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              // data-aos="fade-up"
            >
              {faq.question}
            </button>
          </h2>
          <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
          data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      <footer className="bg-dark text-white py-5"data-aos="fade-up">
  <div className="container"data-aos="fade-up">
    <div className="row"data-aos="fade-up">
      {/* First Column - About */}
      <div className="col-md-3"data-aos="fade-up">
        <h5 className="text-uppercase mb-4"data-aos="fade-up">About Us</h5>
        <p>
          Education Learning is committed to providing high-quality learning resources to help students achieve their academic goals.
        </p>
      </div>

      {/* Second Column - Links */}
      <div className="col-md-3"data-aos="fade-up">
        <h5 className="text-uppercase mb-4"data-aos="fade-up">Quick Links</h5>
        <ul className="list-unstyled"data-aos="fade-up">
          <li className="mb-3"data-aos="fade-up">
            <a href="#home" className="text-white link-hover"data-aos="fade-up"><i className="fas fa-home"data-aos="fade-up"></i> Home</a>
          </li>
          <li className="mb-3"data-aos="fade-up">
            <a href="#about" className="text-white link-hover"data-aos="fade-up"><i className="fas  fa-info-circle"data-aos="fade-up"></i> About</a>
          </li>
          <li className="mb-3"data-aos="fade-up">
            <a href="#features" className="text-white link-hover"><i className="fas fa-cogs" data-aos="fade-up"></i> Features</a>
          </li>
          <li className="mb-3" data-aos="fade-up">
            <a href="#creators" className="text-white link-hover"><i className="fas fa-users" data-aos="fade-up"></i> Creators</a>
          </li>
          <li className="mb-3" data-aos="fade-up">
            <a href="#faq" className="text-white link-hover" data-aos="fade-up"><i className="fas fa-question-circle" data-aos="fade-up"></i> FAQ</a>
          </li>
        </ul>
      </div>

      {/* Third Column - Contact */}
      <div className="col-md-3" data-aos="fade-up">
        <h5 className="text-uppercase mb-4" data-aos="fade-up">Contact</h5>
        <ul className="list-unstyled" data-aos="fade-up">
          <li className="mb-3" data-aos="fade-up">
            <a href="mailto:@educationlearning.com" className="text-white link-hover"><i className="fas fa-envelope" data-aos="fade-up"></i> info@educationlearning.com</a>
          </li>
          <li className="mb-3" data-aos="fade-up">
            <a href="tel:+1234567890" className="text-white link-hover" data-aos="fade-up"><i className="fas fa-phone-alt" data-aos="fade-up"></i> 91+8700115912</a>
          </li>
          <li className="mb-3" data-aos="fade-up">
            <a href="https://www.linkedin.com/company/educationlearning" target="_blank" rel="noopener noreferrer" className="text-white link-hover" data-aos="fade-up"><i className="fab fa-linkedin" data-aos="fade-up"></i> LinkedIn</a>
          </li>
          <li className="mb-3" data-aos="fade-up">
            <a href="https://www.facebook.com/educationlearning" target="_blank" rel="noopener noreferrer" className="text-white link-hover" data-aos="fade-up"><i className="fab fa-facebook"></i> Facebook</a>
          </li>
        </ul>
      </div>

      {/* Fourth Column - Newsletter */}
      <div className="col-md-3" data-aos="fade-up">
        <h5 className="text-uppercase mb-4" data-aos="fade-up">Subscribe</h5>
        <p data-aos="fade-up">Stay updated with our latest news, updates, and offers. Subscribe to our newsletter!</p>
        <form data-aos="fade-up">
          <div className="mb-3" data-aos="fade-up">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Email"
              data-aos="fade-up"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Subscribe</button>
        </form>
      </div>
    </div>

    <hr className="my-4"/>
    <div className="text-center">
      <p >&copy; 2025 Education Learning. All Rights Reserved.</p>
      <p >
        Designed and developed by <a href="" className="text-white">EduLearningTeam</a>
      </p>
    </div>
  </div>
</footer>


    </div>
  );
};

export default HomePage;
