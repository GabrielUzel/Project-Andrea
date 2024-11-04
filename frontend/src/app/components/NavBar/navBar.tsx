'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SearchBar from './searchBar';
import BurguerMenu from './burguerMenu';
import styles from '../../../styles/navBarStyle.module.css';
import EssentialsNotLogged from './essentialsNotLogged';
import EssentialsLogged from './essentialsLogged';
import TemplateImage from '../templateImage';

export default function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    return (
        <nav className={styles.navBar}>
            <Link className={styles.logoLink} href='/'>
                <TemplateImage width={100} height={30} className={"logo"}/>
            </Link>
            <SearchBar />

            {isLoggedIn ? (
                <EssentialsLogged />
            ) : (
                <EssentialsNotLogged />
            )}

            <BurguerMenu />
        </nav>
    );
}
