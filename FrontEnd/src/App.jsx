import './Css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Notes from './components/Notes';
import HomePage from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Resources from './components/Resources';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <>
        <nav className="navbar navbar-expand-lg nav-bar-back sticky-top">
          <div className="container">
          <span className="navbar-brand secondary-nav-title" id="subjec-head2">
            Main Nav
          </span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link className="navbar-brand" to="/" id="Nav-bar-Head">
                Education <span id="learning">Learning</span>
              </Link>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="nav-linkkk">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/resources">
                    Resources
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/notes">
                    Notes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/favourite">
                    Favourite
                  </Link>
                </li>
              </ul>
              <form className="d-flex input-nav">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </nav>

        <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<About />} />
  <Route path="/resources" element={<Resources /> } />
  <Route path="/notes" element={<Notes />} />
  <Route path="/blog" element={<Blog />} /> 
  <Route path="/contact" element={<Contact />} />
  <Route path="/favourite" element={<h1>Favourite Page</h1>} />
</Routes>

      </>
    </Router>
  );
}

export default App;
