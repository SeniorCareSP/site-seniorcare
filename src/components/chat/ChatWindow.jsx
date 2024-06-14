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
  const recipienteId = localStorage.getItem('recipienteId');
  const idUsuario = localStorage.getItem('idUsuario');
  let stompClient = null;

  const messagesEndRef = useRef(null);

  // Inicializa o estado com uma mensagem indicando carregamento
  const [chatMessages, setChatMessages] = useState([{ content: 'Carregando mensagens...' }]);

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
    stompClient = Stomp.over(socket);

    stompClient.connect({}, (frame) => {
      console.log('Connected: ' + frame);
      const messageTopic = `/topic/${localStorage.getItem('message')}`;
      stompClient.subscribe(messageTopic, (message) => {
        try {
          const parsedMessage = JSON.parse(message.body);
          showMessage(parsedMessage); // Chama showMessage para processar a mensagem recebida
        } catch (error) {
          console.error('Erro ao processar mensagem recebida:', error);
        }
      });
    });

    return () => {
      if (stompClient) {
        stompClient.disconnect(() => {
          console.log('Disconnected');
        });
      }
    };
  }, [recipienteId]);

  const showMessage = (message) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
    scrollToBottom();
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const message = {
        chatId: 'chat123',
        senderId: idUsuario,
        recipientId: recipienteId,
        content: newMessage,
        timestamp: new Date().toISOString(),
      };

      try {
        await apiChat.post('/chat', message);
        showMessage(message); // Adiciona a nova mensagem localmente
        setNewMessage('');
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
      }
    }
  };

  const handleEmojiClick = (event, emojiObject) => {
    setNewMessage(prevMessage => prevMessage + emojiObject.emoji);
  };

  return (
    <div className={styles.chatWindow}>
      <div className={styles.header}>
        {recipienteId === null ? (
          <div className={styles.noMessages}>Nenhuma conversa iniciada até o momento.</div>
        ) : (
          <>
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
          <div key={index} className={`${styles.message} ${msg.senderId === idUsuario ? styles.sentMessage : styles.receivedMessage}`}>
            <img src="https://via.placeholder.com/50" alt={msg.senderId} className={styles.messagePhoto} />
            <div className={styles.messageText}>{msg.content}</div>
          </div>
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
