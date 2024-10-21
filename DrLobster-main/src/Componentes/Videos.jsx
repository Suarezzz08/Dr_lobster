import React from "react";
import Designer from "../Imagenes/Designer.jpeg";
import { Link } from "react-router-dom";
import "../Estilos/Index.css";

function Videos() {
  return (
    <div className="container">
      <div className="row">
        <img src={Designer} className="rounded mx-auto d-block" alt="logo" style={{ maxWidth: "500px" }}></img>
        <div className="Mx-Auto">


            <p className="text-center">
              <div><a href="https://www.youtube.com/watch?v=SGCHfhTGbDw">Campaña de salud mental</a>
                </div>
              <div>
              <a href="https://www.youtube.com/watch?v=-eKKFwl8PbE">Cómo identificar el riesgo de suicidio</a>
                </div>
              <div>
              <a href="https://www.youtube.com/watch?v=7h_gF8n7ZCk">Vídeo motivacional</a>
                </div>
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

export default Videos;