import { AttachFile, InsertEmoticon, MicNone, MoreVert, SearchOutlined, } from "@material-ui/icons";
import { Avatar, IconButton } from "@mui/material";
import { useState } from "react";
import "./Chat.css";

function Chat() {
    const [input,setInput]=useState("");

    function sendMessage(e){
        e.preventDefault();
        console.log(input);

    }

    return (
    <div className="chat">
        <div className="chat__header">
            <Avatar />
            <div className="chat__headerInfo">
                <h3>Room name</h3>
                <p>Last seen at...</p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>
        <div className="chat__body">
            <p className="chat__message chat__receiver">
            <span className="chat__name">Darshan</span>
            Hey 
            <span className="chat__timestamp">
                3:25PM
            </span>

            </p>
        </div>
        <div className="chat__footer">
            <InsertEmoticon/>
            <form>
                <input placeholder="Send a message..." type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
                <button onClick={e=>sendMessage(e)} type="submit">Send message</button>
            </form>
            <MicNone/>
        </div>
    </div> ); 
}

export default Chat;