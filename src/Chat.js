import React from 'react'
import './Chat.css';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

function Chat({name,message,profilePic,timestamp}) {
    return (
        <Link to={`/chat/${name}`}>
        <div className='chat'>
            <Avatar className='chat__image' alt='name' src={profilePic}>{name}</Avatar>
        <div className='chat__details'>
            <h2 className='chat__header'>{name}</h2>
            <p className='chat__message'>{message}</p>
        </div>
        <p className='chat__timestamp'>{timestamp}</p>
        </div>
        </Link>
    )
}

export default Chat
