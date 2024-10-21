import React from "react";
import Designer from "../Imagenes/Designer.jpeg";
import { Link } from "react-router-dom";
import "../Estilos/Index.css";

function Artículos() {
  return (
    <div className="container">
      <div className="row">
        <img src={Designer} className="rounded mx-auto d-block" alt="logo" style={{ maxWidth: "500px" }}></img>
        <div className="Mx-Auto">


            <p className="text-center">
              <div>
                <a href="https://www.minsalud.gov.co/salud/publica/SMental/Paginas/suicidio.aspx">Prevención del suicidio (Minsalud)</a>
                  </div>
              <div>
                <a href="https://www.helpguide.org/es/perdida-y-duelo/duelo-por-suicidio-como-sobrellevar-el-suicidio-de-un-ser-querido">Duelo por suicidio</a>
                  </div>
              <div>
                <a href="https://www.cigna.com/es-us/knowledge-center/hw/cmo-encontrar-la-fuerza-para-seguir-adelante-acl8496">Maneras de superar pensamientos suicidas</a>
                  </div>
              <div>
                <a href="https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0718-48082015000200006">Las múltiples caras del suicidio</a>
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

export default Artículos;