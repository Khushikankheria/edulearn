import React, { useState } from "react";
import "../Css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Sidebar from "./Sidebar";
import Cpp from "./Subject-Content/Cpp";
import Dbms from "./Subject-Content/Dbms";
import Dsa from "./Subject-Content/Dsa";
import JavaScript from "./Subject-Content/JavaScript";
import Oops from "./Subject-Content/Oops";
import Python from "./Subject-Content/Python";
// import Html from "./Subject-Content/Html";
// import Css from "./Subject-Content/Css";
// import ReactJs from "./Subject-Content/ReactJs";
// import Algorithms from "./Subject-Content/Algorithms";

const Notes = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const subjects = [
    "C++",
    "JavaScript",
    "DSA",
    "Python",
    "DBMS",
    "OOPS",
    "HTML",
    "CSS",
    "ReactJS",
    "Algorithms",
  ];

  const openSidebar = (subject) => {
    setSelectedSubject(subject);
    setSidebarVisible(true);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  const openTopic = (topic) => {
    setSelectedTopic(topic);
  };

  const subjectComponents = {
    "C++": <Cpp topic={selectedTopic} />,
    "DBMS": <Dbms topic={selectedTopic} />,
    "DSA": <Dsa topic={selectedTopic} />,
    "JavaScript": <JavaScript topic={selectedTopic} />,
    "OOPS": <Oops topic={selectedTopic} />,
    "Python": <Python topic={selectedTopic} />,
    // "HTML": <Html topic={selectedTopic} />,
    // "CSS": <Css topic={selectedTopic} />,
    // "ReactJS": <ReactJs topic={selectedTopic} />,
    // "Algorithms": <Algorithms topic={selectedTopic} />,
  };

  return (
    <div className="notes-container">
      {/* Secondary Navbar */}
      <nav className="navbar navbar-expand-lg nav-bar-back secondary-nav">
        <div className="container">
          <span className="navbar-brand secondary-nav-title" id="subjec-head">
            Subjective Nav
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerNotes"
            aria-controls="navbarTogglerNotes"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerNotes">
            <ul className="navbar-nav me-auto mb-0" id="topics-notes" >
              {subjects.map((subject) => (
                <li className="nav-item" key={subject}>
                  <button
                    className={`nav-link btn btn-link subject-btn ${
                      selectedSubject === subject ? "active-subject" : ""
                    }`}
                    onClick={() => openSidebar(subject)}
                  >
                    {subject}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className="content-wrapper">
        {/* Sidebar */}
        {isSidebarVisible && (
          <Sidebar
            subject={selectedSubject}
            closeSidebar={closeSidebar}
            onTopicClick={openTopic}
          />
        )}

        {/* Notes Content */}
        <div className={`main-content ${isSidebarVisible ? "with-sidebar" : ""}`}>
          {selectedSubject ? (
            subjectComponents[selectedSubject] || <p>No content available for this subject.</p>
          ) : (
            
                <div className="container">
      <div className="header">Welcome to Our Notes Section</div>
      <div className="description">
        Explore a variety of subjects and dive deep into learning. Select any
        subject to view detailed notes and enhance your understanding.
      </div>

      <div className="call-to-action">
        <button className="cta-button">
          Start Learning Now
        </button>
      </div>
    </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;
