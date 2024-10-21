import React from "react";
import Designer from "../Imagenes/Designer.jpeg";
import { Link } from "react-router-dom";
import "../Estilos/Index.css";

function Contenido() {
  return (
    <div className="container">
      <div className="row">
        <img src={Designer} className="rounded mx-auto d-block" alt="logo" style={{ maxWidth: "500px" }}></img>
        <div className="Mx-Auto">


            <p className="text-center">
        <i>Contenidos</i> es el apartado donde podras visualizar cada uno de los distintos temas que abarcan la pagina. En este apartado podras visualizar los distintos temas en formato video, imagenes u articulos. 
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

export default Contenido;