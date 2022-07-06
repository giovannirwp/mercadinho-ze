import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            Mercadinho new do Zé
          </Link>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cadastro-produtos">
                  Cadastro
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/consulta-produtos">
                Consultas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
