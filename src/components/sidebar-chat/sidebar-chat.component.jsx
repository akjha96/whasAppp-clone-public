import { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebar-chat.style.css";

const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState(0);
  useEffect(() => {
    const newSeed = Math.floor(Math.random() * 7000);
    setSeed(newSeed);
  }, []);

  const createChat = () => {
    let roomName = prompt("Please enter Room Name");
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Laast Message</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
