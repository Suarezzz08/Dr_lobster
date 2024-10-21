import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './Páginas/Inicio'
import Login from "./Páginas/Login"
import Inicio_sesion from "./Páginas/inicio_de_sesion"
import Registro from "./Páginas/Registro"
import Perfil from "./Páginas/Perfil"
import ChatBoxes from "./Páginas/ChatBox"
import Content from "./Páginas/Contenido"
import Images from "./Páginas/Imagenes"
import Video from "./Páginas/Videos"
import Art from "./Páginas/Articulos"
import Ayud from "./Páginas/Ayuda"
import Comunida from "./Páginas/Comunida"

export default function App() {
  return (
    <Router>
      <Routes>
        
        <Route exact path="/" element={<Inicio/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/registro" element={<Registro/>}/>"
        <Route exact path="/inicio_de_sesion" element={<Inicio_sesion/>}/>
        <Route exact path="/perfil" element={<Perfil/>}/>
        <Route exact path="/chatbox" element={<ChatBoxes/>}/>
        <Route exact path="/contenido" element={<Content/>}/>
        <Route exact path="/imagenes" element={<Images/>}/>
        <Route exact path="/videos" element={<Video/>}/>
        <Route exact path="/articulos" element={<Art/>}/>
        <Route exact path="/ayuda_externa" element={<Ayud/>}/>
        <Route exact path="/comunidad" element={<Comunida/>}/>
        
      </Routes>
    </Router>
  )
}
