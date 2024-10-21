import React from "react";
import { Link } from "react-router-dom";
import Designer from "../Imagenes/Designer.jpeg";

function Pie_de_pagina() {
  return (
    <div className="footer">
      <div className="container fluid">
        <div className="row mx-auto">
          <div className="text-center mx-auto">
            <h2 className="encabezado mt-5 pt-4">Somos Dr Lobster</h2>
            <img src={Designer} alt="imagen" width={300} />
            <h4 className="encabezado">
         Registrate con tu correo o inicia sesion para acceder al foro de ayuda o foro publico.
            </h4>
            <p className="px-3">
              <small>
                Accede a todos los foros, articulos, informacion, contactos, ayuda profesional y contenidos iniciando sesion con tu correo.
              </small>
            </p>
            <section className="text-center pb-4">
              <Link to="" className="btn btn-primary">
                Conocer más
              </Link>
            </section>
          </div>
          <div className="text-center mx-auto">
            <h2 className="encabezado mt-3 pt-3">
              <span className="text-primary">
                Accede <i>aquí</i> a ayuda profesional.
              </span>
            </h2>
            <p className="px-3">
              <small>
                <strong>Tambien accede <i><a>aqui</a></i> a contenidos sobre salud mental</strong>
              </small>
            </p>
              <section className="text-center pb-4">
                <Link to="" className="btn btn-primary">
                  Instalar app
                </Link>
              </section>
            <div id="copyright">
              <hr/>
              <p><small>Dr Lobster</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pie_de_pagina;
