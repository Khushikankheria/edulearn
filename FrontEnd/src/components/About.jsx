import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Css/HomePage.css";
import "../Css/About.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

  const AboutPage = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
      });
    }, []);
  
    return (
      <div className="about-page">
        {/* Hero Section */}
        <section className="hero-section" >
          <div className="container text-center text-white" >
            <h1 className="display-3">About Us</h1>
            <p className="lead">
              Transforming education through innovation, fostering knowledge, and
              empowering learners everywhere.
            </p>
          </div>
        </section>
  
        {/* Our Mission Section */}
        <section className="mission-section py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6" data-aos="fade-right" >
                <img
                  src="/public/mission.jpeg"
                  alt="Our Mission"
                  className="img-fluid rounded shadow"
                  id="img-of-mission"
                />
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <h2 className="section-title">Our Mission</h2>
                <p className="mission-text" style={{color:"black"}}>
                  Our mission is to provide a world-class learning experience
                  accessible to everyone, everywhere. We are committed to
                  fostering innovation and empowering students, educators, and
                  communities to achieve their full potential.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    Empowering learners through accessible education.
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    Fostering growth with innovative tools and resources.
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    Building a community of passionate educators and students.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* Vision Section */}
        <section className="vision-section text-white">
  <div className="container py-5">
    <h2 className="section-title text-center mb-4">Our Vision</h2>
    <div className="row text-center d-flex align-items-stretch">
      {/* Vision Point 1 */}
      <div className="col-md-4 mb-4" data-aos="fade-up">
        <div className="vision-card p-4 shadow rounded h-100 d-flex flex-column">
          <i className="fas fa-globe fa-3x text-primary mb-3"></i>
          <h5 className="vision-card-title">Global Accessibility</h5>
          <p className="vision-card-text">
            Empowering learners worldwide by making education available to
            everyone, anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Vision Point 2 */}
      <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
        <div className="vision-card p-4 shadow rounded h-100 d-flex flex-column">
          <i className="fas fa-brain fa-3x text-success mb-3"></i>
          <h5 className="vision-card-title">Innovative Learning</h5>
          <p className="vision-card-text">
            Revolutionizing education through creative tools and advanced
            technology for better engagement.
          </p>
        </div>
      </div>

      {/* Vision Point 3 */}
      <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="400">
        <div className="vision-card p-4 shadow rounded h-100 d-flex flex-column">
          <i className="fas fa-hands-helping fa-3x text-warning mb-3"></i>
          <h5 className="vision-card-title">Community Collaboration</h5>
          <p className="vision-card-text">
            Building a supportive network of educators and learners, fostering
            collaboration and shared growth.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  
        {/* Core Values Section */}
        <section className="values-section py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5">Our Core Values</h2>
            <div className="row">
              {[
                {
                  icon: "fas fa-lightbulb",
                  title: "Innovation",
                  description:
                    "Driving change through cutting-edge tools and creative solutions.",
                },
                {
                  icon: "fas fa-users",
                  title: "Community",
                  description:
                    "Building a supportive network of learners and educators.",
                },
                {
                  icon: "fas fa-heart",
                  title: "Passion",
                  description:
                    "Fueling education with dedication and a love for learning.",
                },
                {
                  icon: "fas fa-handshake",
                  title: "Integrity",
                  description:
                    "Maintaining trust and transparency in everything we do.",
                },
              ].map((value, index) => (
                <div className="col-md-3 text-center mb-4" key={index} data-aos="fade-up">
                  <div className="value-card p-4 shadow rounded">
                    <i className={`${value.icon} fa-3x text-primary mb-3`}></i>
                    <h5 className="value-title">{value.title}</h5>
                    <p className="value-description">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
      
      <section className="creator-section py-5" data-aos="fade-up">
        <div className="container">
          <h2
            className="text-center display-4 mb-5"
            data-aos="fade-up"
            style={{
              fontFamily: "'Roboto', sans-serif",
              color: "black",
              fontSize: "3rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            Meet the Creators
          </h2>

          {/* Creator Slider */}
          <div
            id="creatorSlider"
            className="carousel slide"
            data-bs-ride="carousel"
            data-aos="fade-up"
          >
            <div className="carousel-inner">
              {/* Creator Information */}
              {[ 
                {
                  name: "Divesh Sachdeva",
                  role: "MERN Stack Developer",
                  description: "I am a passionate MERN stack developer with expertise in building dynamic and scalable web applications. I love to leverage MongoDB, Express.js, React.js, and Node.js to create full-stack solutions that deliver great user experiences.",
                  passion: "I am passionate about creating efficient and impactful web applications. I enjoy solving problems and building scalable, user-friendly solutions that help users in their day-to-day lives.",
                  image: "../public/Divesh.png",
                  github: "https://github.com/DiveshSachdeva12",
                  linkedin: "https://www.linkedin.com/in/divesh-kumar-sachdeva-b618bb250/",
                  email: "mailto:diveshkumarsachdeva85@gmail.com",
                  portfolio: "https://diveshsachdeva12.github.io/Portfolio-Divesh/"
                },
                {
                  name: "Anushka Jain",
                  role: "Backend Developer",
                  description: "I am a backend developer with a focus on building efficient, scalable server-side solutions, ensuring that the backend works seamlessly with the frontend.",
                  passion: "My passion lies in creating high-performance systems that support scalable applications.",
                  image: "../public/Anushka.jpeg",
                  github: "https://github.com/AnushkaJainFirst",
                  linkedin: "https://linkedin.com/in/anushkagratitude",
                  email: "connectwithme2508@gmail.com",
                  portfolio: "https://anushkajainfirst.github.io/My-Portfolio-Website-1/"
                },
                {
                  name: "Khushi Xyz",
                  role: "UI/UX Designer",
                  description: "Khushi is a UI/UX designer who focuses on creating intuitive and beautiful user interfaces that prioritize user experience and interaction.",
                  passion: "Khushi is passionate about designing interfaces that are both functional and aesthetically pleasing.",
                  image: "../public/creator3.jpg",
                  github: "https://github.com/khushixyz",
                  linkedin: "https://linkedin.com/in/khushixyz",
                  email: "mailto:khushi@example.com",
                  portfolio: "https://khushixyz.dev"
                },
                {
                  name: "Nidhi Verma",
                  role: "Project Manager",
                  description: "Nidhi is a project manager who ensures smooth coordination and timely delivery of projects, maintaining high standards of quality and collaboration.",
                  passion: "Nidhi is dedicated to driving project success with effective communication and organization skills.",
                  image: "../public/Nidhi.jpeg",
                  github: "https://github.com/Nidhi-Verma18",
                  linkedin: "https://www.linkedin.com/in/nidhi-verma-663756265/",
                  email: "nidhi18verma3@gmail.com",
                  portfolio: "https://nidhixyz.dev"
                }
              ].map((creator, index) => (
                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                  <div className="row align-items-center">
                    {/* Left Section - Image and Passion */}
                    <div className="col-md-6">
                      <div className="creator-image">
                        <img
                          src={creator.image}
                          alt={`${creator.name} Image `}
                          className="img-fluid rounded-circle"
                          style={{
                            width: "280px",
                            height: "320px",
                            objectFit: "cover",
                            border: "5px solid #007bff",
                            padding: "30px",
                          }}
                        />
                      </div>
                      <div className="creator-passion mt-4">
                        <h3 style={{ fontFamily: "'Roboto', sans-serif", color: "#4e73df" }}>
                          Passion for Development
                        </h3>
                        <p style={{ fontSize: "1.1rem", color: "#555" }}>
                          {creator.passion}
                        </p>
                      </div>
                    </div>

                    {/* Right Section - Details and Social Media */}
                    <div className="col-md-6">
                      <div
                        className="creator-details"
                        style={{
                          backgroundColor: "#4e73df",
                          borderRadius: "10px",
                          color: "#fff",
                          padding: "30px",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <h3 className="creator-name" style={{ fontSize: "2rem", fontWeight: "600", color: "#fff" }}>
                          {creator.name}
                        </h3>
                        <p className="role" style={{ fontSize: "1.2rem", color: "#f8f9fc" }}>
                          {creator.role}
                        </p>
                        <p className="description" style={{ fontSize: "1rem", color: "#f1f1f1" }}>
                          {creator.description}
                        </p>

                        {/* Social Media Links */}
                        <div className="d-flex justify-content-start gap-3 mt-4">
                          <a
                            href={creator.github}
                            className="btn btn-dark btn-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "1rem", padding: "12px 20px" }}
                          >
                            <i className="fab fa-github"></i> GitHub
                          </a>
                          <a
                            href={creator.linkedin}
                            className="btn btn-primary btn-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "1rem", padding: "12px 20px" }}
                          >
                            <i className="fab fa-linkedin"></i> LinkedIn
                          </a>
                          <a
                            href={creator.email}
                            className="btn btn-danger btn-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "1rem", padding: "12px 20px" }}
                          >
                            <i className="fas fa-envelope"></i> Email
                          </a>
                          <a
                            href={creator.portfolio}
                            className="btn btn-info btn-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "1rem", padding: "12px 20px" }}
                          >
                            Visit Portfolio
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <a
              className="carousel-control-prev"
              href="#creatorSlider"
              role="button"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#creatorSlider"
              role="button"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </section>
    </div>

  );
}
export default AboutPage;
