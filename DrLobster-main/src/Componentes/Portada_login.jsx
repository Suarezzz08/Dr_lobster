import React from "react";
import Designer from "../Imagenes/Designer.jpeg";
import "../Estilos/Index.css";

function Portada_login() {
  return (
    <div className="container">
      <div className="row">
        <img src={Designer} className="rounded mx-auto d-block" alt="logo" style={{ maxWidth: "500px" }}></img>
        <div className="Mx-Auto">
          <p className="text-center">
            En Dr Lobster cuentas con todo tipo de ayuda que necesites: contamos con contactos con profesionales de la salud mental, chat y linea contra el suicidio, foro, articulos e informacion sobre la prevencion y ayuda con enfermedades mentales. 
          </p>

            <p className="text-center">
         Si sientes que necesitas ayuda, Dr Lobster siempre estará ahí para ayudarte Cuando te sientas solo, cuando sientas que no vale la pena nada, cuando sientas que no puedes hacer nada, cuando estés triste o enojado, siempre tendremos personas activas en el foro o profesionales al tanto para poder escucharte y aconsejarte.
          </p>
          <p className="text-center"> 
            <i>¡No estas solo! ¡Cuenta con Dr Lobster!</i>
          </p>  
        </div>
        <h3 className="text-center">Contacto</h3>
        <p className="text-center"> 
          <strong>Gmail:</strong> Drlobster@gmail.com<br/>
          <strong>Teléfono:</strong> +54 9 11 555-55-55<br/>
          <strong>Instagram:</strong> @DrLobster<br/>
          <strong>Facebook:</strong> DrLobster
        </p> 

      </div>
    </div>
  );
}

export default Portada_login;