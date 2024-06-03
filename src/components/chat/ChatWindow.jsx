import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import styles from './ChatWindow.module.css';
import Icone from "../../utils/assets/Ellipse 43.png";
import Emoji from "../../utils/assets/Happy.png";
import Sent from "../../utils/assets/Sent.png";


const messages = [
  // Lista de mensagens exemplo
  { id: 1, user: 'User 1', text: 'Fala ae meu gatinho!!', photo: 'https://via.placeholder.com/50' },
  { id: 2, user: 'User 2', text: 'Tudo certo por ai? Eu tenho dois velho auqi em casa, se a gente combinar certinho todo mundo sai ganhando.... Fiquei sabendo que na verdade essa aplicação aqui é para encontro entre idosos, sugar babys e dadys. Se voce nao sabi caiu de paraquedas aqui me desculpe ! ', photo: 'https://via.placeholder.com/50' },
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
      <img src={Icone} alt="User"/>
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
        <button className={styles.emojiButton} onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
          <img src={Emoji} alt="emojis" className={styles.emojiMessage} />
        
          </button>
                <input
          type="text"
          value={newMessage}
          placeholder='Escreva aqui...'
          onChange={(e) => setNewMessage(e.target.value)}
          className={styles.input}
        />
        <button className={styles.sendButton} onClick={handleSendMessage}>
        <img src={Sent} alt="sent" className={styles.sentMessage} />
        </button>
      </div>
      
    </div>
  );
};

export default ChatWindow;
