import React from "react";

// We import bootstrap to make our application look better.
// import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
// import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-md-auto mr-xs-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/list">Marcadores</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Iniciar sesión</a>
            </li>                        
          </ul>
        </div>
      </nav>
    </div>
  );
}
