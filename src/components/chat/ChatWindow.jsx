import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import styles from './ChatWindow.module.css';
import Icone from "../../utils/assets/Ellipse 43.png";
import Emoji from "../../utils/assets/Happy.png";
import Sent from "../../utils/assets/Sent.png";
import apiChat from '../../api/Usuario/apiChat';
import axios from 'axios';
import { Stack } from '@mui/material';

const ChatWindow = () => {
  const [newMessage, setNewMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const recipienteId = localStorage.getItem('recipienteId');
  const idUsuario = localStorage.getItem('idUsuario');
  const messagesEndRef = useRef(null);
  const stompClient = useRef(null);
  const messageTopic = localStorage.getItem('message');
  const conversante = localStorage.getItem('nomeConversante');
  const [imagemSrcUsuario, setImagemSrcUsuario] = useState(null);
  const [imagemSrcRec, setImagemSrcRec] = useState(null);


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
    fetchImageUsuario(); // Carrega a imagem do usuário logado
    fetchImageRecipient(); // Carrega a imagem do destinatário
  }, []);

  const fetchImageUsuario = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/files/view/${idUsuario}.jpg`, {
        responseType: 'blob'
      });
      const imageObjectURL = URL.createObjectURL(response.data);
      setImagemSrcUsuario(imageObjectURL);
    } catch (error) {
      console.error('Erro ao carregar imagem do usuário:', error);
    }
  };

  const fetchImageRecipient = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/files/view/${recipienteId}.jpg`, {
        responseType: 'blob'
      });
      const imageObjectURL = URL.createObjectURL(response.data);
      setImagemSrcRec(imageObjectURL);
    } catch (error) {
      console.error('Erro ao carregar imagem do destinatário:', error);
    }
  };

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
    console.log(message);

    try {
      const parsedMessage = JSON.parse(message);

      // Exibir os IDs de remetente e destinatário
      console.log('ID do Remetente:', parsedMessage.senderId);
      console.log('ID do Destinatário:', parsedMessage.recipientId);

      if (parsedMessage.content.trim()) {
        setChatMessages(prevMessages => [...prevMessages, parsedMessage]);
        scrollToBottom();
      }
    } catch (error) {
      console.warn('Mensagem não é JSON, adicionando como mensagem simples:', message);
      // setChatMessages(prevMessages => [...prevMessages, { content: message }]);
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

      console.log('mensagem enviada ', message);

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
            <Stack direction='row' spacing={4} alignItems='center'>
              <img src={imagemSrcRec || Icone} className={styles.messagePhotoChat} alt="User" />
              <Stack direction='column'>
                <div className={styles.userName}>{conversante}</div>
                <div className={styles.userDistance}>0,7km</div>
              </Stack>
            </Stack>
          </>
        )}
      </div>

      <div className={`${styles.messages} ${recipienteId === null ? styles.messagesNoRecipient : ''}`}>

        {chatMessages.map((msg, index) => (
          msg.content && (

            <div key={index} className={`${styles.message} `} style={{
              display: 'flex', justifyContent: msg.senderId == idUsuario ? 'end' : 'start', alignItems: 'center', flexDirection: msg.senderId == idUsuario ? 'row-reverse' : 'row'
            }}>

              <img
                src={msg.senderId == idUsuario ? imagemSrcUsuario : imagemSrcRec} 
                alt={msg.senderId}
                className={styles.messagePhoto}
              />

              <div className={styles.message} style={{color: msg.senderId == idUsuario ? 'white' : 'black',
                backgroundColor: msg.senderId == idUsuario ? '#2C7595' : '#80C1DE', borderRadius: '20vh', alignItems: 'center', maxWidth: '50vh', height: 'auto'
              }}>{msg.content}</div>
            </div>
          )

        ))}

        <div ref={messagesEndRef}></div>

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
