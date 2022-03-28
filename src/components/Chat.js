import { AttachFile, InsertEmoticon, MicNone, MoreVert, SearchOutlined, } from "@material-ui/icons";
import { Avatar, IconButton } from "@mui/material";
import "./Chat.css";
import { useState, useRef, useEffect } from "react";
import Message from "./Message";
import instance from "../axios";

function Chat({ loginname, messages }) {

    const divRef = useRef(null);
    const [inputMessage, setInputMessage] = useState("");

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const data = {
            "message": inputMessage,
            "name": loginname,
            "timestamp": new Date(),
            "receiver": "false"
        }

        await instance.post("/api/v1/messages/new", data);
        setInputMessage("");
    }



    useEffect(() => {
        divRef.current.scrollBy(0, 10000);

    }, [messages]);

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/SEEED.svg`} />
                <div className="chat__headerInfo">
                    <h3>{loginname}</h3>
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
            <div ref={divRef} className="chat__body">
                {
                    messages.map(message => <Message key={message._id} message={message} loginname={loginname} />)
                }
            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form onSubmit={onFormSubmit}>
                    <button type="submit">Send message</button>
                    <input placeholder="Send a message..." type="text" value={inputMessage} onChange={(e) => { setInputMessage(e.target.value) }} />
                </form>
                <MicNone />
            </div>
        </div>);
}

export default Chat;