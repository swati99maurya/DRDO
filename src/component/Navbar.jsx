import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
         DRDO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/alogin" ? "active" : ""
                }`}
                to="/alogin"
              >
                Admin
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link className="btn btn-warning mx-2" to="/login" role="button">
              User Login
            </Link>
            <Link className="btn btn-warning mx-2" to="/sign" role="button">
              User Sign Up
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;