import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import db from "../firebase";


function Sidebar() {

    const [rooms,setRooms]=useState();

    useEffect(()=>{
        db.collection("room").onSnapshot((snapshot)=>{
            setRooms(snapshot.docs.map(doc=>({
                id:doc.id,
                data : doc.data()
            })));
        });
    },[])
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLarge></DonutLarge>
                    </IconButton>
                    <IconButton>

                    <Chat></Chat>
                    </IconButton>
                    <IconButton>

                    <MoreVert></MoreVert>
                    </IconButton>
                    
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer"> 
                    <SearchOutlined/>
                    <input type="text" placeholder="Search or start a new chat"/>
                </div>
            </div>
            <div className="sidebar__chats">
            {
                rooms.map(room=>{
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                })
            }
        
          
         


            </div>

        </div>
    );
}

export default Sidebar;