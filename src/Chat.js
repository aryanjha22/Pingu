import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, {useState, useEffect} from 'react'
import './Chat.css'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import {useParams} from 'react-router-dom'
import db from './firebase'


function Chat() {

    const [input, setInput] = useState("")
    const {roomId} = useParams()
    const [roomName, setRoomName] = useState("")

    useEffect(() =>{
        if(roomId){
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot((snapshot) => setRoomName
                (snapshot.data().name))
        }
    }, [roomId])

    const sendMessage = (e) =>{
        e.preventDefault()
        console.log("You typed >>>", input)
        setInput("")
    }
    

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar/>
                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat_hederRight">
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
            <div className="chat_body">
                <p className={`chat_message ${true && "chat_receiver"}`}>
                <span className="chat_name">Aryan</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat_message chat_receiver">
                <span className="chat_name">Aryan</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat_message">
                <span className="chat_name">Aryan</span>
                    This is a message
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />
                    <button 
                        onClick={sendMessage}
                        type="submit">
                            Send a message
                        </button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
