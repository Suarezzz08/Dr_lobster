import React from "react";
import "../Estilos/Index.css";
import Pie_de_pagina from "../Componentes/Pie_de_página";
import { Link } from "react-router-dom";

function Init() {
  return (
    <div className="app">
      <div class="row g-0 text-center">
        <header className="header">
          <div className="login-section">
            <h2>Iniciar sesión</h2>
            <form>
              <div>
                <label>Usuario:</label>
                <input type="text" name="username@tucorreo.com"></input>
              </div>
              <div>
                <label>Contraseña:</label>
                <input type="password" name="password"></input>
              </div>
              <Link to="/inicio_de_sesion">
                <button type="submit">Iniciar sesión</button>
              </Link>
            </form>
          </div>
          <div className="info-section">
            <h2>Dr Lobster</h2>
            <p>
              <i>¡No estas solo! ¡Cuenta con Dr Lobster!</i>
            </p>
          </div>
        </header>
        <Pie_de_pagina />
      </div>
    </div>
  );
}

export default Init;
