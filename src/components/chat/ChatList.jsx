import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './ChatList.module.css';
import apiChat from '../../api/Usuario/apiChat';
import axios from 'axios';
import { Stack, TextField } from '@mui/material';
import InputPesquisa from '../Input/InputPesquisa';
const ChatList = ({ onUserClick }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [userImages, setUserImages] = useState({});

  useEffect(() => {
    async function fetchUsers() {
      const idUsuario = localStorage.getItem('idUsuario');
      try {
        const response = await apiChat.get(`/chats/${idUsuario}`);
        if (Array.isArray(response.data)) {
          setUsers(response.data);
          await fetchImages(response.data);
        } else {
          console.error('Erro: a resposta da API não é um array de usuários.');
        }
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }

    fetchUsers();
  }, []);

  const fetchImages = async (users) => {
    const images = {};
    await Promise.all(users.map(async (user) => {
      try {
        const response = await axios.get(`http://localhost:8080/files/view/${user.usuario2.idUsuario}.jpg`, {
          responseType: 'blob',
        });
        images[user.usuario2.idUsuario] = URL.createObjectURL(response.data); // Armazena a imagem no objeto
      } catch (error) {
        console.error('Erro ao carregar imagem:', error);
      }
    }));
    setUserImages(images);
  };

  const handleUserClick = async (userId, chatId, nomeConversado) => {
    localStorage.setItem('recipienteId', userId);
    localStorage.setItem('message', chatId);
    localStorage.setItem('nomeConversante', nomeConversado);
    onUserClick();
  };

  const filteredUsers = users.filter(user =>
    user.usuario2.nome.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={Styles.chatList}>
      <Stack direction='column' spacing={2}>

        <Stack alignItems='center' paddingTop='2vh'>
          <InputPesquisa
            sx={{ backgroundColor: 'white', borderRadius: '2vh' }}
            type="text"
            placeholder="Pesquisar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Stack>
        <div className={Styles.users}>
          {filteredUsers.map(user => (
            <div
              key={user.id}
              className={Styles.user}
              onClick={() => handleUserClick(user.usuario2.idUsuario, user.chatId, user.usuario2.nome)}
            >
              <img src={userImages[user.usuario2.idUsuario]} alt={user?.usuario2?.nome} className={Styles.userPhoto} />
              <div className={Styles.userInfo}>
                <div className={Styles.userName}>{user?.usuario2?.nome}</div>
              </div>
            </div>
          ))}
        </div>
      </Stack>
    </div>
  );
};

export default ChatList;
