import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './ChatList.module.css';
import apiChat from '../../api/Usuario/apiChat';

const ChatList = ({ onUserClick }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      var idUsuario = localStorage.getItem('idUsuario');
      try {
        const response = await apiChat.get('/chats/' + idUsuario);
        setUsers(response.data); // Atualiza o estado com os dados da API
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }

    fetchUsers();
  }, []); // Chama apenas uma vez ao montar o componente

  const handleUserClick = async (userId,chatId) => {
    try {
      localStorage.setItem('recipienteId', userId);
      localStorage.setItem('message', chatId);

      onUserClick(); // Chama a função passada como prop para recarregar o ChatWindow
    } catch (error) {
      console.error('Erro ao buscar mensagens:', error);
    }
  };

  const filteredUsers = users.filter(user =>
    user.usuario2.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={Styles.chatList}>
      <div className={Styles.header}>
        <img src='' alt="Logo" />
        <div className={Styles.titles}>
          <span className={Styles.home}>Home</span>
          <span className={Styles.conversas}>Conversas</span>
          <span className={Styles.favoritos}>Favoritos</span>
        </div>
      </div>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={Styles.searchBar}
      />
      <hr />
      <div className={Styles.users}>
        {filteredUsers.map(user => (
          <div
            key={user.id}
            className={Styles.user}
            onClick={() => handleUserClick(user.usuario2.id, user.chatId)}
          >
            <img src={user.usuario2.photo} alt={user.usuario2.nome} className={Styles.userPhoto} />
            <div className={Styles.userInfo}>
              <div className={Styles.userName}>{user.usuario2.nome}</div>
              <div className={Styles.userMessage}>{user.usuario2.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
