import React from "react";
import Designer from "../Imagenes/Designer.jpeg";
import { Link } from "react-router-dom";
import "../Estilos/Index.css";

function Portada() {
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
          <h1 className="text-center">¿Quiénes somos?</h1>
          <p className="text-center">Somos un conjunto de programadores sin fines de lucro que quieren fomentar la salud mental y la busqueda de ayuda en personas por medio de internet.</p>
          <h3 className="text-center">¿De qué se trata la página?</h3>
          <p className="text-center"><i>Dr Lobster</i> es un sitio web el cual busca brindar informacion, ayuda y acceso a contenidos variados sobre salud mental y prevencion del suicidio.</p>
          <h3 className="text-center">¿Para quién va dirigida la página?</h3>
          <p className="text-center">La pagina va dirigida a un publico general de cualquier edad. En <i>Dr Lobster</i> no nos importa tu edad, orientacion o preferencias; nos importas tú y tú salud mental. </p>
          <p className="text-center"> 
            <i>¡No estas solo! ¡Cuenta con Dr Lobster!</i>
          </p>  
        </div>

        <Link to="/registro">
          <div class="d-grid gap-2 col-6 mx-auto pb-1">
            <button class="btn btn-primary" type="button">
              Regístrate
            </button>
          </div>
        </Link>

        <Link to="/login">
          <div class="d-grid gap-2 col-6 mx-auto pb-3">
            <button class="btn btn-primary" type="button">
              Iniciar sesión
            </button>
          </div>
        </Link>
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

export default Portada;