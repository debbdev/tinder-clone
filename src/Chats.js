import React from 'react'
import Chat from './Chat';
import './Chats.css';

function Chats() {
    return (
        <div className='chats'>
            <Chat
            name='Lisa Mudd'
            message='Hello!!'
            timestamp='40 seconds ago '
            profilePic='https://www.wallpapertip.com/wmimgs/50-501859_top-20-whatsapp-fb-profile-dp-for-girls.jpg'
            />
            <Chat
            name='Nina'
            message='Hi There!!'
            timestamp='25 seconds ago '
            profilePic='https://s.itl.cat/pngfile/s/66-662583_hd-images-for-fb-profile-picture-7-pictures.jpg'
            />
            <Chat
            name='David'
            message='Whats up!!'
            timestamp='30 seconds ago '
            profilePic='https://i.pinimg.com/originals/c4/31/7e/c4317e176ee6095840f7b1762b7fbcad.jpg'
            />
            <Chat
            name='Azure'
            message='Love you!!'
            timestamp='15 seconds ago '
            profilePic='https://data.whicdn.com/images/322027365/original.jpg?t=1541703413'
            />
        </div>
    )
}

export default Chats
