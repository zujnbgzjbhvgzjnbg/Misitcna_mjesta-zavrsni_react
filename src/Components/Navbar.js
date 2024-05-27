import React from "react";
import { Link } from "react-router-dom";
import MojLogo from "../logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={MojLogo} alt="MojLogo" className="logo-image" />{" "}
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Početna
            </Link>0
          </li>
          <li className="nav-item">
            <a href="#o-nama" className="nav-links">
              O nama
            </a>
          </li>
          <li className="nav-item">
            <Link to="/ListaMijesta" className="nav-links">
              Tablica
            </Link>
          </li>
          <li className="nav-item">
            <a href="#kontakt" className="nav-links">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
