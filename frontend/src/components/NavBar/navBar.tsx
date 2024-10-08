import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './searchBar';
import Essentials from './essentials';
import BurguerMenu from './burguerMenu';
import styles from '../../styles/navBarStyle.module.css';

export default function NavBar() {
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
            <Essentials />
            <BurguerMenu />
        </nav>
    );
}
