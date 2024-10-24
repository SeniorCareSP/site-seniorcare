import React, { useState } from 'react';
import ChatList from '../../components/chat/ChatList';
import ChatWindow from '../../components/chat/ChatWindow';
import styles from './chat.module.css';
import Navbar from '../../components/cuidador/navbar/navbarCuidador';
function Chat() {
  const [key, setKey] = useState(0);

  const reloadChatWindow = () => {
    setKey(prevKey => prevKey + 1);
  };

  return (
    <>
      <Navbar />
      <div className={styles.chatContainer}>
        <ChatList onUserClick={reloadChatWindow} />
        <ChatWindow key={key} />
      </div>
    </>
  );
}

export default Chat;
