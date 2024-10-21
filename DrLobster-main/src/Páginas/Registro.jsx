import React from "react"
import Registro_usuario from "../Componentes/Registro_usuario"
import Menu from "../Componentes/Menu"
import FormularioRegistro from "../Componentes/FormularioRegistro";

function Registro(){
  return (
    <div className="header">
      <Menu/>
      <FormularioRegistro/>
    </div>
  );
}

export default Registro