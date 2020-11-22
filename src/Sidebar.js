import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import {IconButton, Avatar} from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons'
import SidebarChat from './SidebarChat'
import db from "./firebase"


function Sidebar() {

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot) =>
                setRooms(snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                )
        )
    }, [])

    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9892ScHHvnBdqHdWGrFA8EJVjmXu7SixR3ch8ZX-A=s32-c-mo"/>
                <div className='sidebar_headerRight'>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className='sidebar_search'>
                <div className='sidebar_searchContainer'>
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat/>
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id}
                    name={room.data.name}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
