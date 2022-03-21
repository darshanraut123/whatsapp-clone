import { Avatar } from "@mui/material";
import "./Sidebarchat.css"

function SidebarChat({addNewChat}) {
function createChat(){
    const roomname = prompt("Please enter name for chat");
    if(roomname){
        //do some task
    }
}

    return !addNewChat?(
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/SEED.svg`} />
            <div className="sidebarChat__Info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ):
    (
        <div onClick={createChat}>
            <div className="sidebarChat">
                <h2>Add new chat</h2>
            </div>
        </div>
    );
}

export default SidebarChat;