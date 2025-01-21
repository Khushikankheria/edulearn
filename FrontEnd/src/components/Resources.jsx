import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Css/Resource.css";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

const Resources = () => {
  const subjects = [
    { name: "C++", image: "/public/c++.png", pdf: "/public/pdf/c++.pdf" },
    { name: "DBMS", image: "/public/dbms.png", pdf: "/public/pdf/dbms.pdf" },
    { name: "Java", image: "/public/java.png", pdf: "/public/pdf/java.pdf" },
    { name: "Data Structures", image: "/public/dsa.png", pdf: "/public/pdf/dsa.pdf" },
    { name: "Algorithms", image: "/public/algo.jpeg", pdf: "/public/pdf/osi.pdf" },
    { name: "Operating Systems", image: "/public/os.jpeg", pdf: "/public/pdf/os.pdf" },
    { name: "Python", image: "/public/python.png", pdf: "/public/pdf/python.pdf" },
    { name: "Web Development", image: "/public/webde.png", pdf: "/public/pdf/webde.pdf" },
    { name: "Computer Networks", image: "/public/computernet.jpeg", pdf: "/public/pdf/computerne.pdf" },
    { name: "Machine Learning", image: "/public/machine.jpeg", pdf: "/public/pdf/ml.pdf" },
    { name: "JavaScript", image: "/public/js.png", pdf: "/public/pdf/javascript.pdf" },
    { name: "React", image: "/public/react.jpeg", pdf: "/public/pdf/react.pdf" },
  ];

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out', 
      once: true, 
    });
  }, []);

  return (
    <div className="row justify-content-center" id="resource-head">
      <h2 id="education-head">Educational Resources</h2>
  {subjects.map((subject, index) => (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index} data-aos="fade-up">
      <div className="subject-card shadow-lg rounded-lg p-4 bg-gradient text-light">
        <img
          src={subject.image}
          alt={subject.name}
          className="subject-image img-fluid rounded mb-4"
          style={{ height: "230px", objectFit: "cover", borderRadius: "12px" }}
        />
        <h5 className="subject-name text-center mb-3" style={{ fontWeight: "600", fontSize: "1.5rem" }}>
          {subject.name}
        </h5>
        <a
          href={subject.pdf}
          className="btn btn-custom btn-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-download"></i> Download PDF
        </a>
      </div>
    </div>
  ))}
</div>

  );
};

export default Resources;
