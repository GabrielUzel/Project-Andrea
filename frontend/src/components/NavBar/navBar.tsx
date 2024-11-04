'use client'

import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import SearchBar from './searchBar';
import BurguerMenu from './burguerMenu';
import styles from '../../styles/navBarStyle.module.css';
import EssentialsNotLogged from './essentialsNotLogged';
import EssentialsLogged from './essentialsLogged';
import TemplateImage from '../templateImage';

export default function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const renderContent = useMemo(() => {
        if(isLoggedIn === null) {
            return <div style={{width:'180px', height:'44px'}}></div>
        }

        return isLoggedIn ? <EssentialsLogged /> : <EssentialsNotLogged />
    }, [isLoggedIn]);

    return (
        <nav className={styles.navBar}>
            <Link className={styles.logoLink} href='/'>
                <TemplateImage width={100} height={30} className={"logo"}/>
            </Link>
            <SearchBar />
            {renderContent}
            <BurguerMenu />
        </nav>
    );
}
