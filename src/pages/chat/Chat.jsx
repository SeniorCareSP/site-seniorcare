import React from 'react';
import ChatList from '../../components/chat/ChatList';
import ChatWindow from '../../components/chat/ChatWindow'
import styles from './chat.module.css';

function Chat() {
    return (
        <div className={styles.chatContainer}>
            <ChatList />
            <ChatWindow />
        </div>
    );
}

export default Chat;
