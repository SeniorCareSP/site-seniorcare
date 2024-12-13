import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './ChatList.module.css';
import apiChat from '../../api/Usuario/apiChat';
import axios from 'axios';
import { Stack, Slide, Typography } from '@mui/material';
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
        const response = await apiChat.get(`/with-last-messages/by-sender?senderId=${idUsuario}`);
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.error('Erro: a resposta da API não é um array de usuários.');
        }
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }
    fetchUsers();
  }, []);

  const handleUserClick = async (userId, chatId, nomeConversado, imagemUrl) => {
    localStorage.setItem('recipienteId', userId);
    localStorage.setItem('imagemUrlConversante', imagemUrl)
    localStorage.setItem('message', chatId);
    localStorage.setItem('nomeConversante', nomeConversado);
    onUserClick();
  };

  const filteredUsers = users.filter(user =>
    user.nome.toLowerCase().includes(search.toLowerCase()));

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
        <div className={Styles.users} direction="down" >
          {filteredUsers.map(user => (
            <div
              key={user.id}
              className={Styles.user}
              onClick={() => handleUserClick(user.recipientId, user.chatId, user.nome, user.imagemUrl)}
            >
              <img src={[user.imagemUrl]} alt={user?.nome} className={Styles.userPhoto} />
              <Stack direction='row' sx={{ justifyContent: 'space-between', width: '100%' }} alignItems='center'>
                <Stack direction='column' spacing={1}>
                  <Typography variant='h6'>{user?.nome}</Typography>
                  <Typography variant='inherit' maxWidth='10vh' overflow='hidden'>{user?.content}</Typography>
                </Stack>
                <Typography variant='inherit'>{new Date(user?.timestamp).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</Typography>
              </Stack>
            </div>
          ))}
        </div>
      </Stack>
    </div>
  );
};

export default ChatList;
