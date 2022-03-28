import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@mui/material";
// import {  useState } from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { WhatsApp } from "@material-ui/icons";


function Sidebar() {

    

    return (
        <div className="sidebar">
            <div className="sidebar__header">
            <WhatsApp className="whatsAppIcon"></WhatsApp>
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
            {/* {
                rooms.map(obj=>{
                    <SidebarChat />
                })
                
            } */}
        
          
        <SidebarChat />


            </div>

        </div>
    );
}

export default Sidebar;