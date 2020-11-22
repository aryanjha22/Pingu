import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebarchat.css'
import db from "./firebase"
import {Link} from 'react-router-dom'

function SidebarChat({id, name, addNewChat}) {

    const createChat = () =>{
        const roomName = prompt("Please enter name for the chat...")

        if(roomName){
            db.collection('rooms').add({
                name: roomName
            })
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar/>
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                    <p>This is the last message</p>
                </div>
            </div>
        </Link>
    ): (
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChat
