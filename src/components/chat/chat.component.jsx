import { useState } from "react";

import { Avatar, IconButton } from "@material-ui/core";

import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
} from "@material-ui/icons";

import MicIcon from "@material-ui/icons/Mic";

import "./chat.style.css";

const Chat = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${false && "chat__receiver"}`}>
          <span className="chat__name">Anand</span>
          hey Guys!
          <span className="chat__timestamp"> 07:00 pm </span>
        </p>
        <p className={`chat__message ${false && "chat__receiver"}`}>
          <span className="chat__name">Anand</span>
          hey Guys!
          <span className="chat__timestamp"> 07:00 pm </span>
        </p>
        <p className={`chat__message ${false && "chat__receiver"}`}>
          <span className="chat__name">Anand</span>
          hey Guys!
          <span className="chat__timestamp"> 07:00 pm </span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form action="">
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Type a mesasge"
          />
          <button onClick={sendMessage} type="submit">
            Send message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
