import React from "react";
import Contenido from "../Componentes/Contenido";
import Menu_login from "../Componentes/menu_login";

function Content() {
  return(
    <div  className='header'>
      <Menu_login />
      <Contenido />
    </div>
  );
}

export default Content;