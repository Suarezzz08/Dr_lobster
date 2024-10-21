import React from "react"
import ChatBox from "../Componentes/ChatBox";
import Menu_login from "../Componentes/menu_login";

function ChatBoxes(){
  return (
    <div className="header">
      <Menu_login/>
      <ChatBox/>
    </div>
  );
}

export default ChatBoxes;