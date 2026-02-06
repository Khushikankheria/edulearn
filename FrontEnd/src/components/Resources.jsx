import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Css/Resource.css";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const subjects = [
    { name: "C++", image: "/public/cpp.webp", pdf: "/public/pdf/c++.pdf", category: "Programming" },
    { name: "DBMS", image: "/public/dbms.webp", pdf: "/public/pdf/dbms.pdf", category: "Database" },
    { name: "Data Structures", image: "/public/dsa.webp", pdf: "/public/pdf/dsa.pdf", category: "Core" },
    { name: "Algorithms", image: "/public/algo.webp", pdf: "/public/pdf/osi.pdf", category: "Core" },
    { name: "Operating Systems", image: "/public/os.webp", pdf: "/public/pdf/os.pdf", category: "Core" },
    { name: "Python", image: "/public/python.webp", pdf: "/public/pdf/python.pdf", category: "Programming" },
    { name: "Web Development", image: "/public/webd.webp", pdf: "/public/pdf/webde.pdf", category: "Web" },
    { name: "Computer Networks", image: "/public/cn.webp", pdf: "/public/pdf/computerne.pdf", category: "Network" },
    { name: "Machine Learning", image: "/public/ml.webp", pdf: "/public/pdf/ml.pdf", category: "AI" },
    { name: "JavaScript", image: "/public/js.webp", pdf: "/public/pdf/javascript.pdf", category: "Web" },
    { name: "React", image: "/public/react.webp", pdf: "/public/pdf/react.pdf", category: "Web" },
  ];

  const categories = ["All", "Programming", "Core", "Database", "Web", "Network", "AI"];

  const filteredSubjects = useMemo(() => {
    return subjects.filter((subject) => {
      const matchesSearch = subject.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || subject.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="resources-page">
      {/* Search and Filter Section */}
      <section className="search-filter-section">
        <div className="container">
          <div className="search-box">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              placeholder="Search resources by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="results-count">
            Showing {filteredSubjects.length} resource{filteredSubjects.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="resources-grid-section">
        <div className="container">
          {filteredSubjects.length > 0 ? (
            <div className="resources-grid">
              {filteredSubjects.map((subject, index) => (
                <div key={index} className="resource-card">
                  <div className="card-image-wrapper">
                    <img
                      src={subject.image}
                      alt={subject.name}
                      className="card-image"
                    />
                    <div className="card-overlay">
                      <a
                        href={subject.pdf}
                        className="download-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-download"></i> Download
                      </a>
                    </div>
                  </div>
                  <div className="card-content">
                    <span className="category-badge">{subject.category}</span>
                    <h3 className="card-title">{subject.name}</h3>
                    <p className="card-description">Download comprehensive study materials and resources</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <h3>No Resources Found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Resources;
