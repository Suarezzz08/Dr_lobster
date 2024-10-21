import React from "react";
import Artículos from "../Componentes/Artículos";
import Menu_login from "../Componentes/menu_login";

function Art() {
  return(
    <div  className='header'>
      <Menu_login />
      <Artículos />
    </div>
  );
}

export default Art;