'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './navBarStyle.module.css';

export default function SearchBar() {
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if(query.trim()) {
            window.location.href = `/search?result=${encodeURIComponent(query)}`;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className={styles.searchBar} type="text" placeholder='O que deseja aprender?'value={query} onChange={ (event) => setQuery(event.target.value) } />
            <button className={styles.searchButton} type='submit'>
                <Image
                    className = {styles.searchIcon}
                    src = "/img/search-icon.svg"
                    width = {20}
                    height = {20}
                    alt = "Search icon"
                />
            </button>
        </form>
    );
}
