import React, { useState } from 'react';
import ChatList from '../../components/chat/ChatList';
import ChatWindow from '../../components/chat/ChatWindow';
import styles from './chat.module.css';

function Chat() {
  const [key, setKey] = useState(0);

  const reloadChatWindow = () => {
    setKey(prevKey => prevKey + 1); // Incrementa a chave para forçar o recarregamento
  };

  return (
    <div className={styles.chatContainer}>
      <ChatList onUserClick={reloadChatWindow} />
      <ChatWindow key={key} />
    </div>
  );
}

export default Chat;
