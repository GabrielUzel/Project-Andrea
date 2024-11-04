'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../../styles/navBarStyle.module.css';
import Link from 'next/link';

export default function EssentialsNotLogged() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenuState = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    const logoutUser = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <div className={styles.essentialsDiv}>
            <Link className={styles.essentialsLink} href='/mycourses'>Meus cursos</Link>
            <div>
                <Image
                    src="/img/template.jpeg"
                    width={40}
                    height={40}
                    alt="Profile image"
                    className={styles.profileImage}
                    onMouseEnter={toggleMenuState}
                />
            </div>

            <div className={styles.menuDiv} style={{ display: menuIsOpen ? 'flex' : 'none' }} onMouseLeave={toggleMenuState}>
                <Link className={styles.menuLink} href='/editprofile'>
                    <Image
                        src="/img/edit-profile-icon.svg"
                        width={20}
                        height={20}
                        className="editProfileIcon"
                        alt="Home image"
                    />
                    Editar perfil
                </Link>
                <Link className={styles.menuLink} href='/settings'>
                    <Image
                        src="/img/settings-icon.svg"
                        width={20}
                        height={20}
                        className="settingsIcon"
                        alt="Settings image"
                    />
                    Configurações
                </Link>
                <Link className={styles.menuLink} href='/shoppingcart'>
                    <Image
                        src="/img/shopping-cart-icon.svg"
                        width={20}
                        height={20}
                        className="shoppingCartIcon"
                        alt="Shopping cart image"
                    />
                    Carrinho
                </Link>
                <button className={styles.logoutButton} onClick={logoutUser}>
                    <Image
                        src="/img/logout-icon.svg"
                        width={20}
                        height={20}
                        className="logoutIcon"
                        alt="logout image"
                    />
                    Sair
                </button>
                <Link className={styles.menuLink} href='/support'>
                    <Image
                        src="/img/support-icon.svg"
                        width={20}
                        height={20}
                        className="signupIcon"
                        alt="Support image"
                    />
                    Suporte
                </Link>
            </div>
        </div>
    );
}
