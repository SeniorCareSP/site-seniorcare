import React from 'react';
import { InputBase } from '@mui/material';
import styles from './SearchBar.module.css';

function SearchBar({ search, onSearchChange }) {
    return (
        <div className={styles.searchBar}>
            <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={search}
                onChange={onSearchChange}
                className={styles.inputBase}
            />
        </div>
    );
}

export default SearchBar;
