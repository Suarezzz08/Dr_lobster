import React from "react";
import Menu_login from "../Componentes/menu_login";
import Portada_login from "../Componentes/Portada_login"

function Inicio_sesion() {
  return(
    <div  className='Inicio'>
      <Menu_login/>
      <Portada_login/>
    </div>
  );
}

export default Inicio_sesion