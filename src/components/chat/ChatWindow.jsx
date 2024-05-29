import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import styles from './ChatWindow.module.css';
import zIndex from '@mui/material/styles/zIndex';

const messages = [
  // Lista de mensagens exemplo
  { id: 1, user: 'User 1', text: 'Hello!', photo: 'https://via.placeholder.com/50' },
  { id: 2, user: 'User 2', text: 'Hi!', photo: 'https://via.placeholder.com/50' },
  // Adicione mais mensagens conforme necessário
];

const ChatWindow = () => {
  const [newMessage, setNewMessage] = useState('');
  const [chatMessages, setChatMessages] = useState(messages);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: chatMessages.length + 1,
        user: 'Me',
        text: newMessage,
        photo: 'https://via.placeholder.com/50',
      };
      setChatMessages([...chatMessages, message]);
      setNewMessage('');
    }
  };

  const handleEmojiClick = (event, emojiObject) => {
    setNewMessage(prevMessage => prevMessage + emojiObject.emoji);
  };

  return (
    <div className={styles.chatWindow}>
      <div className={styles.header}>
        <img src="path/to/user-photo.jpg" alt="User" />
        <div className={styles.userInfo}>
          <div className={styles.userName}>User Name</div>
          <div className={styles.userDistance}>0,7km</div>
        </div>
      </div>
      <div className={styles.messages}>
        {chatMessages.map((msg) => (
          <div key={msg.id} className={styles.message}>
            <img src={msg.photo} alt={msg.user} className={styles.messagePhoto} />
            <div className={styles.messageText}>{msg.text}</div>
          </div>
        ))}
      </div>
      
        <div className={styles.emojiPicker}>{showEmojiPicker && (
          <EmojiPicker onEmojiClick={handleEmojiClick} pickerStyle={{ bottom: '60px', left: '10px' }} />
        )}
        </div>

      <div className={styles.inputBar}>
        <button className={styles.emojiButton} onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</button>
                <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className={styles.input}
        />
        <button className={styles.sendButton} onClick={handleSendMessage}>➡️</button>
      </div>
      
    </div>
  );
};

export default ChatWindow;
