import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div classname="header">
      <div class="row g-0 text-center">
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <Link class="navbar-brand" to="/">
                    <strong>
                    <i>Dr Lobster</i>
                      </strong>
                  </Link>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                            <Link class="nav-link active" to="/">

                          Inicio
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/login">
                          Inicio de sesión
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link active" to="/registro">
                          Regístrate
                        </Link>
                      </li>
                   </ul>
                 </div>
                </div>
              </nav>
              <div classname="container">
                <form class="d-flex" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Buscar"
                    aria-label="Search"
                  />
                  <button type="button" class="btn btn-info">
                    Buscar
                  </button>
                </form>
              </div></div>

      <div classname="p-3">
        <div className="card text-center">
          <div className="card-header" style={{ backgroundColor: "#ef5d3e" }}>
            <strong>BIENVENIDO</strong>
          </div>
          <div className="card-body" style={{ backgroundColor: "#fcb3a3" }}> 
            <h4 classname="encabezado fst-italic">
              Bienvenido a Dr Lobster
            </h4>
            <p classname="card-text">
              Dr Lobster es un sitio web y foro enfocado al apoyo emocional y psicologico para todo aquel que necesite informacion, ayuda profesional o alguien con quien hablar. Con este sitio queremos promover la salud mental y la prevencion de enfermedades mentales o el suicidio. <strong>¡No estas solo!</strong>
              
            </p>
          </div>
        </div>
      </div>
     
        </div>

      
  );
}

export default Menu;
