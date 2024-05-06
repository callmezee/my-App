import "./App.css";
import PostsList from "./features/posts/PostsList";
import AddFormPost from "./features/posts/AddFormPost";
import AddApi from "./features/posts/AddApi";
import Home from "./features/posts/Home";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Navbar } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import About from "./features/posts/About";
import Contact from "./features/posts/Contact";
import News from "./features/posts/News";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Services from "./features/posts/Services";
import SignUp from "./features/posts/SignUp";
import Login from "./features/posts/Login";
function sendRoutesToBackend() {
  const routes = [
    "/home",
    "/about",
    "/contact",
    "/add-post",
    "/posts",
    "/add-api",
    "/news",
    "/services",
    "/signup",
    "/login",
  ]; // Add all your routes here
  fetch("http://localhost:5002/update-sitemap", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ routes }),
  })
    .then((response) => response.json())
    .then((data) => console.log("Sitemap updated", data))
    .catch((error) => console.error("Error updating sitemap", error));
}

function App() {
  const location = useLocation();

  useEffect(() => {
    // Collect all routes from your route configuration
    const routes = [
      "/home",
      "/add-post",
      "/posts",
      "/add-api",
      "/about",
      "/contact",
      "/news",
      "/services",
      "/signup",
      "/login",
    ]; // Add all defined paths
    sendRoutesToBackend(routes);
  }, [location]);

  return (
    <>
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
              <li className="nav-item">
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Log In
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
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
