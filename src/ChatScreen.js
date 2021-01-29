import React, {useState} from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
    const [input,setInput]= useState('');
    const [messages,setMessages]=useState([
        {
            name:  'Nina',
            image:  'https://s.itl.cat/pngfile/s/66-662583_hd-images-for-fb-profile-picture-7-pictures.jpg',
            message:  'Hit me Up!!'
        },
        {
            name:  'Lisa',
            image:  'https://s.itl.cat/pngfile/s/66-662583_hd-images-for-fb-profile-picture-7-pictures.jpg',
            message:  'Hit me Up!!'
        },
        {
            message:  'Hit me Up!!'
        }
    ]);
            const handleSend =(e)=>{
                e.preventDefault();

          setMessages([...messages,{message: input}]);
          setInput("");
            }
            
    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>YOU MATCHED WITH NINA ON 10/12/2020</p>
            {messages.map((message)=>
             message.name ? (
        <div className='chatScreen__message'>
            <Avatar className='chatScreen__image' alt='message.name' src={message.image}>{message.name}</Avatar>
            <p className='chatScreen__text'>{message.message}</p>
          </div>
                ): (
                <div className='chatScreen__message'>
                <p className='chatScreen__textUser'>{message.message}</p>
              </div>
              )
            )} 
   
            <form className='chatScreen__input'>
               <input value={input} onChange={e=> setInput(e.target.value)}type='text' className='chatScreen__inputField' placeholder='Type a message....'></input>
               <button onClick={handleSend} type='submit' className='chatScreen__button'>SEND</button>
            </form>

     </div>
    );
  }

export default ChatScreen
