import React, { useState } from 'react';
import styles from './ChatList.module.css';

const users = [
  // Lista de usuários exemplo
  { id: 1, name: 'User 1', message: 'Hello!', photo: 'https://via.placeholder.com/50' },
  { id: 2, name: 'User 2', message: 'Hi!', photo: 'https://via.placeholder.com/50' },
  // Adicione mais usuários conforme necessário
];

const ChatList = () => {
  const [search, setSearch] = useState('');

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={styles.chatList}>
      <div className={styles.header}>
        <img src="path/to/heart-icon.png" alt="Heart" />
        <div className={styles.titles}>
          <span className={styles.home}>Home</span>
          <span className={styles.conversas}>Conversas</span>
          <span className={styles.favoritos}>Favoritos</span>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchBar}
      />
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
