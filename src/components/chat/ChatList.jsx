import React, { useState } from 'react';
import styles from './ChatList.module.css';
import logo from '../../utils/assets/logoapertadinha.svg'

const users = [
  // Lista de usuários exemplo
  { id: 1, name: 'Mariana', message: 'E o front, ta pronto?', photo: 'https://via.placeholder.com/50' },
  { id: 2, name: 'Jordana', message: 'Ah inadimplencia da faculdade, ufa!', photo: 'https://via.placeholder.com/50' },
  { id: 3, name: 'Igor', message: 'Vixi!', photo: 'https://via.placeholder.com/50' },
  { id: 4, name: 'Rafaela', message: 'Ah não sei voce que sabe', photo: 'https://via.placeholder.com/50' },
  { id: 5, name: 'Gustavo', message: 'É por causa que', photo: 'https://via.placeholder.com/50' },
  { id: 6, name: 'Frizza', message: 'Aoba!', photo: 'https://via.placeholder.com/50' },
  { id: 7, name: 'Monteiro', message: 'Oloko bicho...', photo: 'https://via.placeholder.com/50' },
  { id: 8, name: 'Reis', message: 'Pq pra um relacionamento dar certo', photo: 'https://via.placeholder.com/50' },
  { id: 9, name: 'Isabela', message: 'Figma e UX e UI', photo: 'https://via.placeholder.com/50' },
  { id: 10, name: 'Celia', message: 'Ainda faltam 0.22s para o intervalo!', photo: 'https://via.placeholder.com/50' },
  // Adicione mais usuários conforme necessário
];

const ChatList = () => {
  const [search, setSearch] = useState('');

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={styles.chatList}>
      <div className={styles.header}>
      <img src={logo} alt = "Logo"/>
              <div className={styles.titles}>
          <span className={styles.home}>Home</span>
          <span className={styles.conversas}>Conversas</span>
          <span className={styles.favoritos}>Favoritos</span>
        </div>
      </div>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchBar}
      />
      <hr />
      <div className={styles.users}>
        {filteredUsers.map(user => (
          <div key={user.id} className={styles.user}>
            <img src={user.photo} alt={user.name} className={styles.userPhoto} />
            <div className={styles.userInfo}>
              <div className={styles.userName}>{user.name}</div>
              <div className={styles.userMessage}>{user.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
