import React from "react";
import Captura from "../Imagenes/Captura.jpeg";

import "../Estilos/Index.css";

function Ayuda() {
  return (
    <div className="container">
      <div className="row">
        <img src={Captura} className="rounded mx-auto d-block" alt="logo" style={{ maxWidth: "500px" }}></img>
        <div className="Mx-Auto">


            <p className="text-center">
              A continuación encontrarás una serie de contactos externos que pueden resolver tus problemas :D
              <div>
              <h5>Servicios de Emergencia a través del 112 (SAMUR, SUMMA).
</h5>
                </div>
              <h5>Asociación Internacional del Teléfono de la Esperanza:
              717 003 717 // 91 459 0055
</h5> Teléfono creado para apoyar a las personas que se encuentra en crisis. Para la prevención del suicidio.
              Funciona las 24 horas.
              <h5>Teléfono de Prevención del Suicidio:
              900 925 555 
</h5>Teléfono de prevención del suicidio. El servicio funcionará en colaboración con la Fundación Ayuda y Esperanza, habilitando una línea vinculada al Teléfono de la Esperanza para atender específicamente las llamadas donde se presenten ideaciones o conductas suicidas, así como aquellas experiencias cercanas.
              Funciona las 24 horas.
              <h5>UNIPSI: 915902654</h5>Centro de atención psicológica y psiquiátrica que está relacionado con la facultad de psicología de Comillas.
              <h5></h5><a href="https://en.wikipedia.org/wiki/List_of_suicide_crisis_lines">LISTA DE LÍNEAS DE PAÍSES DEL MUNDO. INTERVENCIÓN EN CRISIS SUICIDAS</a>
              
          </p>
          
          <p className="text-center"> 
            <i>¡No estas solo! ¡Cuenta con Dr Lobster!</i>
          </p>  
        </div>
      </div>
    </div>
  );
}

export default Ayuda;