import React from "react";
import Designer from "../Imagenes/Designer.jpeg";
import Captura from "../Imagenes/Captura.jpeg";
import ola from "../Imagenes/ola.jpeg";
import hola from "../Imagenes/hola.jpeg";

import { Link } from "react-router-dom";
import "../Estilos/Index.css";

function Imagenes() {
  return (
    <div className="container">
      <div className="row">
        <img src={Designer} className="rounded mx-auto d-block" alt="logo" style={{ maxWidth: "500px" }}></img>
        <div className="Mx-Auto">
          <p className="text-center">
            <img src={Captura} className="rounded mx-auto d-block" alt="logo" style={{ maxWidth: "320px" }}></img>
            <img src={ola} className="rounded mx-auto d-block" alt="logo" style={{ maxWidth: "320px" }}></img>
            <img src={hola} className="rounded mx-auto d-block" alt="logo" style={{ maxWidth: "320px" }}></img>
          </p>


        <Link class="nav-link active" to="/imagenes">
          <p><strong>Imagenes</strong></p>
        </Link>
        <Link class="nav-link active" to="/videos">
           <p><strong>Videos</strong></p>
        </Link>
        <Link class="nav-link active" to="/articulos">
           <p><strong>Articulos</strong></p>
        </Link>
          <p className="text-center"> 
            <i>¡No estas solo! ¡Cuenta con Dr Lobster!</i>
          </p>  
        </div>
      </div>
    </div>
  );
}

export default Imagenes;