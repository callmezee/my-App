import "./App.css";
import PostsList from "./features/posts/PostsList";
import AddFormPost from "./features/posts/AddFormPost";
import AddApi from "./features/posts/AddApi";
import Home from "./features/posts/Home";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./features/posts/About";
import Contact from "./features/posts/Contact";

function App() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/add-post">
                    Add Post
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/posts">
                    Posts List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-api">
                    Fetched API
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/add-post" element={<AddFormPost />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/add-api" element={<AddApi />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
