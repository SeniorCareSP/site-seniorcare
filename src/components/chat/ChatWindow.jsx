import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import styles from './ChatWindow.module.css';
import Icone from "../../utils/assets/Ellipse 43.png";
import Emoji from "../../utils/assets/Happy.png";
import Sent from "../../utils/assets/Sent.png";
import apiChat from '../../api/Usuario/apiChat';

const ChatWindow = () => {
  const [newMessage, setNewMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const recipienteId = localStorage.getItem('recipienteId');
  const idUsuario = localStorage.getItem('idUsuario');
  const messagesEndRef = useRef(null);
  const stompClient = useRef(null);
  const messageTopic = localStorage.getItem('message');

  useEffect(() => {
    const fetchMessages = async () => {
      if (recipienteId) {
        try {
          const response = await apiChat.get(`messages/${idUsuario}/${recipienteId}`);
          setChatMessages(response.data);
        } catch (error) {
          console.error('Erro ao buscar mensagens:', error);
          setChatMessages([{ content: 'Erro ao carregar mensagens.' }]);
        }
      }
    };

    fetchMessages();
  }, [recipienteId, idUsuario]);

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/websocket');
    stompClient.current = Stomp.over(socket);

    stompClient.current.connect({}, (frame) => {
      console.log('Conectado:', frame);

      stompClient.current.subscribe(`/topic/${messageTopic}`, (message) => {
        showMessage(message.body);
      });
    });

    return () => {
      if (stompClient.current) {
        stompClient.current.disconnect(() => {
          console.log('Desconectado');
        });
      }
    };
  }, [messageTopic]);

  const showMessage = (message) => {
    console.log('Mensagem recebida:', message);

    // Aqui vamos assumir que a mensagem é um texto simples
    const parsedMessage = {
      chatId: messageTopic,
      senderId: idUsuario,
      recipientId: recipienteId,
      content: message,
      timestamp: new Date().toISOString(),
    };

    console.log('Mensagem recebida (JSON):', JSON.stringify(parsedMessage));


    if (parsedMessage.content.trim()) {
      setChatMessages(prevMessages => [...prevMessages, parsedMessage]);
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const message = {
        chatId: messageTopic,
        senderId: idUsuario,
        recipientId: recipienteId,
        content: newMessage,
        timestamp: new Date().toISOString(),
      };

      try {
        await apiChat.post('/chat', message);
        setNewMessage('');
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
      }
    }
  };

  const handleEmojiClick = (event, emojiObject) => {
    setNewMessage(prevMessage => prevMessage + emojiObject.emoji);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={styles.chatWindow}>
      <div className={styles.header}>
        {recipienteId === null ? (
          <div className={styles.noMessages}>Nenhuma conversa iniciada até o momento.</div>
        ) : (
          <>
            {/* Exibir informações do usuário aqui */}
            <img src={Icone} alt="User" />
            <div className={styles.userInfo}>
              <div className={styles.userName}>User Name</div>
              <div className={styles.userDistance}>0,7km</div>
            </div>
          </>
        )}
      </div>

      <div className={`${styles.messages} ${recipienteId === null ? styles.messagesNoRecipient : ''}`}>
        {chatMessages.map((msg, index) => (
          msg.content && (
            <div key={index} className={`${styles.message} ${msg.senderId === idUsuario ? styles.sentMessage : styles.receivedMessage}`}>
              <img src="https://via.placeholder.com/50" alt={msg.senderId} className={styles.messagePhoto} />
              <div className={styles.messageText} style={{
                backgroundColor: msg.senderId == idUsuario ? '#2C7595' : '#80C1DE'
              }}>{msg.content}</div>
            </div>
          ) 
        ))}
        <div ref={messagesEndRef}></div> {/* Elemento de referência para rolar a lista */}
      </div>

      {recipienteId !== null && (
        <div className={styles.inputBar}>
          <button className={styles.emojiButton} onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
            <img src={Emoji} alt="emojis" className={styles.emojiMessage} />
          </button>
          <input
            type="text"
            value={newMessage}
            placeholder='Escreva aqui...'
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className={styles.input}
          />
          <button className={styles.sendButton} onClick={handleSendMessage}>
            <img src={Sent} alt="sent" className={styles.sentMessage} />
          </button>
        </div>
      )}

      <div className={styles.emojiPicker}>
        {showEmojiPicker && (
          <EmojiPicker onEmojiClick={handleEmojiClick} pickerStyle={{ bottom: '60px', left: '10px' }} />
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
