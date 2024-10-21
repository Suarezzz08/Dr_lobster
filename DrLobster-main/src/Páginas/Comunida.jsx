import React from "react";
import Community from "../Componentes/Comunidad";
import Menu_login from "../Componentes/menu_login";

function Comunida() {
  return(
    <div  className='header'>
      <Menu_login />
      <Community />
    </div>
  );
}

export default Comunida;