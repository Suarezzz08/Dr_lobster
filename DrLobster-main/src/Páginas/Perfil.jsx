import React from "react"
import Profile from "../Componentes/Profile";
import Menu_login from "../Componentes/menu_login";

function Perfil(){
  return (
    <div className="header">
      <Menu_login/>
      <Profile/>
    </div>
  );
}

export default Perfil;