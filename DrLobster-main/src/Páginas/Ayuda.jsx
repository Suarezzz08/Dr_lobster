import React from "react";
import Ayuda from "../Componentes/Ayuda_externa";
import Menu_login from "../Componentes/menu_login";

function Ayud() {
  return(
    <div  className='header'>
      <Menu_login />
      <Ayuda />
    </div>
  );
}

export default Ayud;