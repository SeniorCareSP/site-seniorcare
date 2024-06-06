import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import styles from './UserItem.module.css';

function UserItem({ user }) {
    return (
        <ListItem className={styles.userItem}>
            <ListItemAvatar>
                <Avatar src={user.avatar} />
            </ListItemAvatar>
            <ListItemText primary={user.name} secondary={user.message} />
        </ListItem>
    );
}

export default UserItem;
