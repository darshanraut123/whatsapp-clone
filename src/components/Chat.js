import { AttachFile, InsertEmoticon, MicNone, MoreVert, SearchOutlined, } from "@material-ui/icons";
import { Avatar, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import "./Chat.css";
import axois from 'axios';
import Message from "./Message";
function Chat() {
    const [input,setInput]=useState("");
    const [chats,setChats]=useState([]);

    useEffect(()=>{
        axois.get("http://localhost:4000/api/messages/sync").then(res=>{
            setChats(res.data);
            console.log(chats)
        }).catch(err=>{console.log(err)})
    },[]);
      

    // useEffect(()=>{
    //     var pusher = new Pusher('4cc37002811aa87b2ca8', {
    //         cluster: 'ap2'
    //       });
    //       var channel = pusher.subscribe('messages');
    //       channel.bind('inserted', function(data) {
    //         setRooms(data);
    //         console.log(data)
    //       });
    // },[])




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
        {
            chats.map(chat=><Message key={chat.id} {...chat}/>)
        }
    
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