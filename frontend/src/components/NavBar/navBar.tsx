'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './searchBar';
import BurguerMenu from './burguerMenu';
import styles from '../../styles/navBarStyle.module.css';
import EssentialsNotLogged from './essentialsNotLogged';
import EssentialsLogged from './essentialsLogged';

export default function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    return (
        <nav className={styles.navBar}>
            <Link className={styles.logoLink} href='/'>
                <Image
                    src="/img/template.jpeg"
                    width={100}
                    height={30}
                    className="logo"
                    alt="Logo image"
                />
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
