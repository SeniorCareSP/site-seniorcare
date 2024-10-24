import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './ChatList.module.css';
import apiChat from '../../api/Usuario/apiChat';
import logo from '../../utils/assets/logo.png';
import axios from 'axios';
import { Stack, TextField } from '@mui/material';
import InputPesquisa from '../Input/InputPesquisa';
const ChatList = ({ onUserClick }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [userImages, setUserImages] = useState({}); // Para armazenar as imagens dos usuários

  useEffect(() => {
    async function fetchUsers() {
      const idUsuario = localStorage.getItem('idUsuario');
      try {
        const response = await apiChat.get(`/chats/${idUsuario}`);
        if (Array.isArray(response.data)) {
          setUsers(response.data); // Atualiza o estado com os dados da API se for um array
          await fetchImages(response.data); // Busca as imagens dos usuários
        } else {
          console.error('Erro: a resposta da API não é um array de usuários.');
        }
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }

    fetchUsers();
  }, []); // Chama apenas uma vez ao montar o componente

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
    setUserImages(images); // Atualiza o estado com todas as imagens
  };

  const handleUserClick = async (userId, chatId, nomeConversado) => {
    localStorage.setItem('recipienteId', userId);
    localStorage.setItem('message', chatId);
    localStorage.setItem('nomeConversante', nomeConversado);
    onUserClick(); // Chama a função passada como prop para recarregar o ChatWindow
  };

  const filteredUsers = users.filter(user =>
    user.usuario2.nome.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={Styles.chatList}>
      <Stack alignItems='center' paddingTop='2vh'>
        <InputPesquisa
          sx={{backgroundColor:'white', borderRadius:'2vh'}}
          type="text"
          placeholder="Pesquisar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Stack>
      <hr />
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
    </div>
  );
};

export default ChatList;
